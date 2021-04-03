import {Router} from 'express'

import {AreaPesquisaController} from './controllers/AreaPesquisaController'
import {EscolaridadeController} from './controllers/EscolaridadeController'
import {ProjetoController} from './controllers/ProjetoController'
import {AvaliadorController} from './controllers/AvaliadorController'
import {ParticipanteController} from './controllers/ParticipanteController'
import {AvaliacaoProjetoController} from './controllers/AvaliacaoProjetoController'

const router = Router()

const areaPesquisaController = new AreaPesquisaController()
const escolaridadeController = new EscolaridadeController()
const projetoController = new ProjetoController()
const avaliadorController = new AvaliadorController()
const participanteController = new ParticipanteController()
const avaliacaoProjetoController = new AvaliacaoProjetoController()

router.post("/areas_pesquisa", areaPesquisaController.create)

router.post("/escolaridades", escolaridadeController.create)

router.post("/projetos", projetoController.create)
router.get("/projetos", projetoController.show)

router.post('/avaliadores', avaliadorController.create)
router.get('/avaliadores', avaliadorController.show)

router.post('/participantes', participanteController.create)
router.get('/participantes', participanteController.show)

router.post('/avaliacaoProjeto', avaliacaoProjetoController.create)
router.get('/avaliacaoProjeto', avaliacaoProjetoController.show)
router.get('/avaliacaoProjeto/:id', avaliacaoProjetoController.listUmAvaliador)

export {router}