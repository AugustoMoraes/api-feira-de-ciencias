import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { AreaPesquisa } from "./AreaPesquisa";
import { Escolaridade } from "./Escolaridade";

@Entity('projetos')
class Projeto{

    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    email: string

    @ManyToOne(type => AreaPesquisa, projeto => Projeto )
    areaPesquisa: AreaPesquisa

    @ManyToOne(type => Escolaridade, peojeto => Projeto)
    escolaridade: Escolaridade
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Projeto}