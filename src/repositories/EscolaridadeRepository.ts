import { EntityRepository, Repository } from 'typeorm'
import {Escolaridade} from '../models/Escolaridade'

@EntityRepository(Escolaridade)
class EscolaridadeRepository extends Repository<Escolaridade>{

}

export {EscolaridadeRepository}