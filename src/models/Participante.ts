import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Projeto } from "./Projeto";

@Entity('participantes')
class Participante{

    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    tipo: string

    @Column()
    idade: number

    @Column()
    escola: string
    
    @ManyToOne(type => Projeto, participante => Participante)
    projeto: Projeto

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export {Participante}