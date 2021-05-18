import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AvaliacaoProjetoRepository } from "../repositories/AvaliacaoProjetoRepository";

class AvaliacaoProjetoController{

    async create(request:Request, response: Response){

        const {banner, postura, organizacao, explicacao, 
                dominioAssunto, relevancia, projeto, avaliador} = request.body
        
        const avaliacaoProjetoReposytory = getCustomRepository(AvaliacaoProjetoRepository)

        //  Verifica se um avaliador já está alocado para avaliar o projeto 
        const isProjetoAvaliado = await avaliacaoProjetoReposytory.findOne({
            projeto: {id : projeto.id},
            avaliador:{id: avaliador.id}})
        
        if(isProjetoAvaliado){
            return response.status(401).json({error: "Este Projeto já foi alocado para este avaliador"})
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
    /**
     * 
     * @param request 
     * @param response 
     * @returns Lista todos os projetos que serão avaliados por um avaliador
     */
    async listUmAvaliador(request:Request, response: Response){

        const avaliacaoProjetoReposytory = getCustomRepository(AvaliacaoProjetoRepository)

        const id = request.params.id
        const allProjetosAvaliador = await avaliacaoProjetoReposytory.find({where: {avaliador: {
            id: id
        }}})

        return response.status(201).json(allProjetosAvaliador)
    }

    /**
     * 
     * @param request 
     * @param response 
     * @returns Retorna a pontuação de um projeto
     */
    async pontuacaoProjeto(request: Request, response: Response){
        
        const avaliacaoProjetoRepository = getCustomRepository(AvaliacaoProjetoRepository)
        const id = request.params.id

        const {banner, dominioAssunto, postura, explicacao, relevancia,organizacao, projeto} = await 
            avaliacaoProjetoRepository.findOne(id)
        const teste = projeto
        const pontuacao = banner + dominioAssunto + postura 
                + explicacao + relevancia + organizacao 
         // Falta listar o avaliador do projeto e verificar e soma todos os projetos avaliados
        return response.status(201).json({pontuacao: pontuacao, projeto: teste})
    }

    async listPontuacao(request: Request, response: Response){
        const avaliacaoProjetoRepository = getCustomRepository(AvaliacaoProjetoRepository)
        // const id = request.params.id

        const allAvaliacaoProjeto = await avaliacaoProjetoRepository.find()

        const listPontuacao = allAvaliacaoProjeto.map(projeto => {
            return projeto.banner + projeto.dominioAssunto + projeto.postura + 
                projeto.explicacao + projeto.relevancia + projeto.organizacao
        })

        return response.status(201).json(listPontuacao)
        
    }
}
export {AvaliacaoProjetoController}