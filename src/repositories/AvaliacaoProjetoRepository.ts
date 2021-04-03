import { EntityRepository, Repository } from "typeorm";
import { AvaliacaoProjeto } from "../models/AvaliacaoProjeto";

@EntityRepository(AvaliacaoProjeto)
class AvaliacaoProjetoRepository extends Repository<AvaliacaoProjeto>{

}
export {AvaliacaoProjetoRepository}