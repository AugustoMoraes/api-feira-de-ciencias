import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Projeto } from "./Projeto";

@Entity("escolaridades")
class Escolaridade{

    
    @PrimaryColumn()
    readonly id: string
    
    @Column()
    nome: string
    
    @OneToMany(type => Projeto, escolaridade => Escolaridade)
    projeto: Projeto
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Escolaridade}