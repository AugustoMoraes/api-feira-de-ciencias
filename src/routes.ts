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
//router.get("/areas_pesquisa", areaPesquisaController.show)
router.get("/areas_pesquisa", areaPesquisaController.show)

router.post("/escolaridades", escolaridadeController.create)

router.post("/projetos", projetoController.create)
router.get("/projetos", projetoController.show)

router.post('/avaliadores', avaliadorController.create)
router.get('/avaliadores', avaliadorController.show)

router.post('/participantes', participanteController.create)
router.get('/participantes', participanteController.show)

router.post('/avaliacao_projeto', avaliacaoProjetoController.create)
router.get('/avaliacao_projeto', avaliacaoProjetoController.show)
router.get('/avaliacao_projeto/:id', avaliacaoProjetoController.listUmAvaliador)
router.get('/pontuacao_projeto/:id', avaliacaoProjetoController.pontuacaoProjeto)
router.get('/list_pontuacao', avaliacaoProjetoController.listPontuacao)

export {router}