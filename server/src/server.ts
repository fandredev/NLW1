import express from 'express'
import cors from 'cors'
import routes from './routes'
import path from 'path'


const app = express()
app.use(cors())
app.use(express.json())
// Request param - Identifica um recurso - find 1 usuario
// query param - Parametros opcionais que vem na rota, filtro, paginação
// Request body - Parametros para criar/atualizar informação

app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')))
app.listen(3333)