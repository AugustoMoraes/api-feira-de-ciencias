import {v4 as uuid} from 'uuid'
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("areas_pesquisa")
class AreaPesquisa{

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

}

export {AreaPesquisa}