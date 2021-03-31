import { EntityRepository, Repository } from 'typeorm';
import {AreaPesquisa} from '../models/AreaPesquisa'

@EntityRepository(AreaPesquisa)
class AreaPesquisaRepository extends Repository<AreaPesquisa>{

}

export {AreaPesquisaRepository}