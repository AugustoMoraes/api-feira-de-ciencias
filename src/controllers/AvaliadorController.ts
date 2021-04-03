import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import {AvalidadorRepository} from '../repositories/AvaliadorRepository'

class AvaliadorController{
    async create(request: Request, response: Response){

        const {nome, usuario, senha} = request.body

        const avaliadorRepository = getCustomRepository(AvalidadorRepository)

        const usuarioExist = await avaliadorRepository.findOne({usuario})
        
        if(usuarioExist){
            return response.status(401).json({error: "Este usuário ja existe"})
        }
        if(usuario.indexOf(' ')){
            return response.status(401).json({error: 'O usuário não pode conter espaços em branco'})
        }

        if(senha.indexOf(' ')){
            return response.status(401).json({error: 'A senha não pode conter espaços em branco'})
        }
        const avaliador = avaliadorRepository.create({
            nome,
            usuario,
            senha
        })

        await avaliadorRepository.save(avaliador)

        return response.status(201).json(avaliador)
    }

    async show(request: Request, response: Response){

        const avaliadorRepository = getCustomRepository(AvalidadorRepository)

        const avaliadorAll = await avaliadorRepository.find()

        return response.status(201).json(avaliadorAll)

    }
}
export {AvaliadorController}