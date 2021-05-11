import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ParticipanteRepository } from "../repositories/ParticipanteRepository";


class ParticipanteController{

    /**
     * 
     * @param request 
     * @param response 
     * @returns Criação de um participante adicionando o projeto e a escola que ele participa
     */
    async create(request: Request, response: Response){

        const {nome, tipo, idade, escola, projeto, } = request.body

        const participanteRepository = getCustomRepository(ParticipanteRepository)

        const participante = participanteRepository.create({
            nome,
            tipo,
            idade, 
            escola,
            projeto
        })

        await participanteRepository.save(participante)

        return response.status(201).json(participante)

    }

    /**
     * 
     * @param request 
     * @param response 
     * @returns Lista todos os participantes que estão cadastrados
     */
    async show(request: Request, response: Response){

        const participanteRepository = getCustomRepository(ParticipanteRepository)

        const participantesAll = await participanteRepository.find()

        return response.status(201).json(participantesAll)
    }
    
}
export {ParticipanteController}