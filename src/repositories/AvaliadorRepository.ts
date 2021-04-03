import { EntityRepository, Repository } from "typeorm";
import { Avalidador } from "../models/Avaliador";

@EntityRepository(Avalidador)
class AvalidadorRepository extends Repository<Avalidador>{

}
export {AvalidadorRepository}