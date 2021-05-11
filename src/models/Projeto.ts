import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { AreaPesquisa } from "./AreaPesquisa";
import { AvaliacaoProjeto } from "./AvaliacaoProjeto";
import { Escolaridade } from "./Escolaridade";
import { Participante } from "./Participante";

@Entity('projetos')
class Projeto{

    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    email: string

    @ManyToOne(type => AreaPesquisa, projeto => Projeto, {onDelete:"CASCADE",eager: true})
    areaPesquisa: AreaPesquisa

    @ManyToOne(type => Escolaridade, peojeto => Projeto, {eager: true})
    escolaridade: Escolaridade
    
    @OneToMany(type => Participante, projeto => Projeto)
    participante: Participante

    @OneToMany(type => AvaliacaoProjeto, projeto => Projeto)
    avaliacaoProjeto: AvaliacaoProjeto
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Projeto}