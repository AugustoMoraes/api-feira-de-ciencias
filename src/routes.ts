import {Router} from 'express'

import {AreaPesquisaController} from './controllers/AreaPesquisaController'
import {EscolaridadeController} from './controllers/EscolaridadeController'
import {ProjetoController} from './controllers/ProjetoController'
import {AvaliadorController} from './controllers/AvaliadorController'
import {ParticipanteController} from './controllers/ParticipanteController'

const router = Router()

const areaPesquisaController = new AreaPesquisaController()
const escolaridadeController = new EscolaridadeController()
const projetoController = new ProjetoController()
const avaliadorController = new AvaliadorController()
const participanteController = new ParticipanteController()


router.post("/areas_pesquisa", areaPesquisaController.create)

router.post("/escolaridades", escolaridadeController.create)

router.post("/projetos", projetoController.create)
router.get("/projetos", projetoController.show)

router.post('/avaliadores', avaliadorController.create)

router.post('/participantes', participanteController.create)
router.get('/participantes', participanteController.show)

export {router}