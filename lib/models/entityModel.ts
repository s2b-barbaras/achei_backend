import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EntitySchema = new Schema({
    nome: String,
    localizacao: {
        latitude: Number,
        longitude: Number
    },
    descricao: String,
    tipo: String,
    camposDinamicos: [ Schema.Types.Mixed ],
    keywords: [ String ],
    created_date: {
        type: Date,
        default: Date.now
    }
});