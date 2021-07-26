import { config } from 'dotenv'
config()

import mongoose from 'mongoose'

export default async function(){
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    return mongoose
}


