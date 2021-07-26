import mongoose from '../database/index.mjs'


const db = await mongoose()

const NotaSchema = new db.Schema({
    assunto: {
        type: String,
        required: [true, 'O asssunto � obrigat�rio.' ],
    },
    texto: {
        type: String,
        required: [true, 'O texto � obrigat�rio.' ],
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Nota  = db.model('Nota', NotaSchema)

export default Nota