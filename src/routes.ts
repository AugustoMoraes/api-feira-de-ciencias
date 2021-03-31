import {Router} from 'express'

import {AreaPesquisaController} from './controllers/AreaPesquisaController'
import {EscolaridadeController} from './controllers/EscolaridadeController'

const router = Router()

const areaPesquisaController = new AreaPesquisaController()
const escolaridadeController = new EscolaridadeController()

router.post("/areas_pesquisa", areaPesquisaController.create)
router.post("/escolaridades", escolaridadeController.create)

export {router}