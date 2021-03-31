import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity('projetos')
class Projeto{

    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    email: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Projeto}