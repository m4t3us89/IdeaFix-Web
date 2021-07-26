import Nota from '../models/notaModel.mjs'


export function createNota(nota){

    return Nota.create(nota)

}


export function listNota(){

    return Nota.find()

}


export async function deleteNota(_id){

    if(!_id) throw new Error(`ID não informado.`)
    await Nota.exists( { _id } )
    return Nota.deleteOne( {_id} )

}



