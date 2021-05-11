import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import {AvalidadorRepository} from '../repositories/AvaliadorRepository'

class AvaliadorController{
    /**
     * 
     * @param request 
     * @param response 
     * @returns Ciração de um Avaliador/Usuário
     */
    async create(request: Request, response: Response){

        const {nome, usuario, senha} = request.body

        const avaliadorRepository = getCustomRepository(AvalidadorRepository)

        //Verifica se o usuário já exite
        const usuarioExist = await avaliadorRepository.findOne({usuario})
        
        if(usuarioExist)
            return response.status(401).json({error: "Este usuário ja existe"})
        
        if(usuario.indexOf(' ') >=0)
            return response.status(401).json({error: 'O usuário não pode conter espaços em branco'})
        
        /** 
        const isSenhaCorreta = await avaliadorRepository.findOne({usuario,senha})
        if(!isSenhaCorreta)
            return response.status(401).json({error: 'A senha incorreta!'})
        */
        if(senha.indexOf(' ')>=0)
            return response.status(401).json({error: 'A senha não pode conter espaços em branco'})
        
        
        const avaliador = avaliadorRepository.create({
            nome,
            usuario,
            senha
        })

        await avaliadorRepository.save(avaliador)

        return response.status(201).json(avaliador)
    }

    /**
     * 
     * @param request 
     * @param response 
     * @returns Realizar login do avaliador
     */
    async login(request: Request, response: Response){
        
        const {nome,usuario, senha} = request.body

        const avaliadorRepository = getCustomRepository(AvalidadorRepository)

        const isValidUser = await avaliadorRepository.findOne({usuario})
        if(!isValidUser)
            return response.status(401).json({error: 'Usuário não existe!'})
        
        const isValidPassword = await avaliadorRepository.findOne({usuario,senha })
        
        if(!isValidPassword)
            return response.status(401).json({error: 'Senha Inválida!'})

        const loginAvaliador = {nome,usuario, senha}
        
        return response.send({loginAvaliador})
    }

    /**
     * 
     * @param request 
     * @param response 
     * @returns Lista todos os Avaliadores 
     */
    async show(request: Request, response: Response){

        const avaliadorRepository = getCustomRepository(AvalidadorRepository)

        const avaliadorAll = await avaliadorRepository.find()

        return response.status(201).json(avaliadorAll)

    }
}
export {AvaliadorController}