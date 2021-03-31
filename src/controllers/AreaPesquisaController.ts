import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { AreaPesquisaRepository } from '../repositories/AreaPesquisaRepository'

class AreaPesquisaController{

    async create(request: Request, response: Response){

        const {nome} = request.body

        const areaPesquisaRepository = getCustomRepository(AreaPesquisaRepository)

        const areaPesquisa = areaPesquisaRepository.create({nome})

        await areaPesquisaRepository.save(areaPesquisa)

        return response.status(201).json(areaPesquisa)

    }
}

export {AreaPesquisaController}