import { createNota, listNota,  deleteNota} from '../services/notaService.mjs'

export async function list(req,res, next){

    try{
        const { offset, limit } = req.query
   
        const notas = await listNota(offset, limit)

        res.status(200).json({
            message: 'listed success',
            data: notas
        })
    }catch(err){
        next({statusCode:400,message:err})
    }

}

export async function create(req,res, next){

    try{
        const data = req.body

        const nota = await createNota(data)

        res.status(201).json({
            message: 'created success',
            data: nota
        })
    }catch(err){
        next({statusCode:400,message:err})
    }


}

export async function remove(req,res, next){

    try{

        const id = req.params.id

        await deleteNota(id)

        res.status(200).send({
            message: 'deleted success'
        })
    }catch(err){
        next({statusCode:400,message:err})
    }


}