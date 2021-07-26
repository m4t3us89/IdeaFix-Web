import { readdirSync } from 'fs'

//import tokenValidateMidd from '../middlewares/tokenValidateMidd.js'

export default async function(app){

    //PARA O CASO DE TODAS AS ROTAS SEREM PRIVADAS, É NECESSÁRIO VALIDAR O TOKEN DE ACESSO
    //app.use(tokenValidateMidd)

    const files = readdirSync(new URL('./', import.meta.url))

    for(const file of files){
        if(file === 'index.mjs') continue
        const { default : router } =  await import(`./${file}`)
        app.use(router)
    }

    app.use('*' , (req,res)=> res.status(404).send({ success : false, message : 'Ops, rota não encontrada =('}))
}

