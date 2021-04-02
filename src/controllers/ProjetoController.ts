import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import {ProjetoRepository} from '../repositories/ProjetoRepository'

class ProjetoController{

    async create(request: Request, response: Response){

        const {nome, email, escolaridade, areaPesquisa} = request.body

        const projetoRepository = getCustomRepository(ProjetoRepository)

        const projeto = projetoRepository.create({
            nome, email, escolaridade, areaPesquisa
        })

        await projetoRepository.save(projeto)

        return response.status(201).json(projeto)
    }

    async show(request: Request, response: Response){

        const projetoRepository = getCustomRepository(ProjetoRepository)

        const listProjetos = await projetoRepository.find()

        return response.json(listProjetos)

    }
}
export {ProjetoController}