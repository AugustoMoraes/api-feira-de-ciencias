import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Avalidador } from "./Avaliador";
import { Projeto } from "./Projeto";

@Entity('avaliacao-projeto')
class AvaliacaoProjeto{

    @PrimaryColumn()
    readonly id: string

    @Column()
    banner: number

    @Column()
    postura: number

    @Column()
    organizacao: number

    @Column()
    explicacao: number

    @Column()
    dominioAssunto: number

    @Column()
    relevancia: number

    @ManyToOne(type => Projeto, avaliacaoprojeto => AvaliacaoProjeto, {eager: true})
    projeto: Projeto

    @ManyToOne(type => Avalidador, avaliacaoProjeto => AvaliacaoProjeto, {eager: true})
    avaliador: Avalidador
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
export {AvaliacaoProjeto}