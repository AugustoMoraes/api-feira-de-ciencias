import { EntityRepository, Repository } from "typeorm";
import { Participante } from "../models/Participante";

@EntityRepository(Participante)
class ParticipanteRepository extends Repository<Participante>{

}
export {ParticipanteRepository}