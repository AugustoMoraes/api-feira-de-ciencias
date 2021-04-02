import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { AreaPesquisa } from "./AreaPesquisa";
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

    @ManyToOne(type => AreaPesquisa, projeto => Projeto, {eager: true} )
    areaPesquisa: AreaPesquisa

    @ManyToOne(type => Escolaridade, peojeto => Projeto, {eager: true})
    escolaridade: Escolaridade
    
    @OneToMany(type => Participante, projeto => Projeto)
    participante: Participante

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Projeto}