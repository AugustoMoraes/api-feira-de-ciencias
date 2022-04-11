import {Request, response, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { AreaPesquisaRepository } from '../repositories/AreaPesquisaRepository'

class AreaPesquisaController{

    /**
     * 
     * @param request 
     * @param response 
     * @returns Criação de uma área de Pesquisa
     */
    async create(request: Request, response: Response){

        const {nome} = request.body

        const areaPesquisaRepository = getCustomRepository(AreaPesquisaRepository)

        const areaPesquisa = areaPesquisaRepository.create({nome})

        await areaPesquisaRepository.save(areaPesquisa)

        return response.status(201).json(areaPesquisa)

    }

    async show(request: Request, responde: Response){
        
        const areaPesquisaRepository = getCustomRepository(AreaPesquisaRepository)
        
        const areaPesquisaAll = await areaPesquisaRepository.find()

        return response.status(201).json(areaPesquisaAll)
    }
}

export {AreaPesquisaController}