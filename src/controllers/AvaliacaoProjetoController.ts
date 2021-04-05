import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AvaliacaoProjetoRepository } from "../repositories/AvaliacaoProjetoRepository";

class AvaliacaoProjetoController{

    async create(request:Request, response: Response){

        const {banner, postura, organizacao, explicacao, 
                dominioAssunto, relevancia, projeto, avaliador} = request.body
        
        const avaliacaoProjetoReposytory = getCustomRepository(AvaliacaoProjetoRepository)

        //  Verifica se um avaliador já avaliou o 
        const isProjetoAvaliado = await avaliacaoProjetoReposytory.findOne({
            projeto: {id : projeto.id},
            avaliador:{id: avaliador.id}})
        
        if(isProjetoAvaliado){
            return response.status(401).json({error: "Este Projeto ja foi avaliado"})
        }
        
        const avaliacaoProjeto = avaliacaoProjetoReposytory.create({
            banner, postura, organizacao, explicacao, 
            dominioAssunto, relevancia, projeto, avaliador
        })

        await avaliacaoProjetoReposytory.save(avaliacaoProjeto)

        return response.status(201).json(avaliacaoProjeto)

    }
    async show(request:Request, response: Response){

        const avaliacaoProjetoReposytory = getCustomRepository(AvaliacaoProjetoRepository)

        const allProjetosAvaliados = await avaliacaoProjetoReposytory.find()

        return response.status(201).json(allProjetosAvaliados)
    }
    async listUmAvaliador(request:Request, response: Response){

        const avaliacaoProjetoReposytory = getCustomRepository(AvaliacaoProjetoRepository)

        const id = request.params.id
        const allProjetosAvaliador = await avaliacaoProjetoReposytory.find({where: {avaliador: {
            id: id
        }}})

        return response.status(201).json(allProjetosAvaliador)
    }
}
export {AvaliacaoProjetoController}