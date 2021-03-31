import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

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

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export {Avalidador}