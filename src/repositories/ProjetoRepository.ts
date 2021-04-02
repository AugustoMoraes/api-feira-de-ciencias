import { EntityRepository, Repository } from "typeorm";
import { Projeto } from "../models/Projeto";

@EntityRepository(Projeto)
class ProjetoRepository extends Repository<Projeto>{

}
export {ProjetoRepository}