import { config } from 'dotenv'
config()

import express from 'express'

import cors from 'cors'

import  registerRoutes  from './routes/index.mjs'

import handleErro from './middlewares/handleErroMidd.mjs'

const app = express()

const PORT_NUMBER =  process.env.PORT || 8000

app.use(cors())

app.use(express.json())

await registerRoutes(app)

app.use(handleErro);

app.listen(PORT_NUMBER, ()=>console.log(`On Port ${PORT_NUMBER}`))