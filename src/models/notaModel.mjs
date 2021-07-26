import mongoose from '../database/index.mjs'


const db = await mongoose()

const NotaSchema = new db.Schema({
    assunto: {
        type: String,
        required: [true, 'O asssunto é obrigatório.' ],
    },
    texto: {
        type: String,
        required: [true, 'O texto é obrigatório.' ],
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Nota  = db.model('Nota', NotaSchema)

export default Nota