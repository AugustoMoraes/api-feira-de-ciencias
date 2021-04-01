import {v4 as uuid} from 'uuid'
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Projeto } from './Projeto';

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

    @OneToMany(type => Projeto, areaPesquisa => AreaPesquisa)
    projeto: Projeto
}

export {AreaPesquisa}