import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { AvaliacaoProjeto } from "./AvaliacaoProjeto";

@Entity('avaliadores')
class Avalidador{

    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    usuario: string

    @Column()
    senha: string

    @OneToMany(type => AvaliacaoProjeto, avaliador => Avalidador)
    avaliacaoProjeto: AvaliacaoProjeto

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export {Avalidador}