import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { EscolaridadeRepository } from '../repositories/EscolaridadeRepository'


class EscolaridadeController{ 

    async create(request: Request, response: Response){
        const {nome} = request.body

        const escolaridadeRepository = getCustomRepository(EscolaridadeRepository)

        const escolaridade = escolaridadeRepository.create({
            nome
        })

        await escolaridadeRepository.save(escolaridade)

        return response.status(201).json(escolaridade)
    }
}

export {EscolaridadeController}