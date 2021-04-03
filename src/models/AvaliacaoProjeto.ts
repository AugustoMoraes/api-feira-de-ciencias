import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity('avaliacao-projeto')
class AvaliacaoProjeto{

    @PrimaryColumn()
    readonly id: string

    @Column()
    banner: number

    @Column()
    postura: number

    @Column()
    organizacao: number

    @Column()
    explicacao: number

    @Column()
    dominioAssunto: number

    @Column()
    relevancia: number

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
export {AvaliacaoProjeto}