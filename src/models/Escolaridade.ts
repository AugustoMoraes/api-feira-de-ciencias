import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("escolaridades")
class Escolaridade{

    
    @PrimaryColumn()
    readonly id: string
    
    @Column()
    nome: string
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Escolaridade}