import { Entity, PrimaryColumn, Column } from "typeorm";
import {v4 as uuid} from 'uuid'

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
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export {Participante}