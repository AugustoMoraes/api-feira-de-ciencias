import {Router} from 'express'

import {AreaPesquisaController} from './controllers/AreaPesquisaController'
import {EscolaridadeController} from './controllers/EscolaridadeController'
import {ProjetoController} from './controllers/ProjetoController'
const router = Router()

const areaPesquisaController = new AreaPesquisaController()
const escolaridadeController = new EscolaridadeController()
const projetoController = new ProjetoController()

router.post("/areas_pesquisa", areaPesquisaController.create)

router.post("/escolaridades", escolaridadeController.create)

router.post("/projetos", projetoController.create)
router.get("/projetos", projetoController.show)

export {router}