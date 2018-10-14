import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const campoDinamico = new Schema({
    label: String,
    valor: Schema.Types.Mixed
});

export const EntitySchema = new Schema({
    nome: String,
    localizacao: {
        latitude: Number,
        longitude: Number
    },
    descricao: String,
    tipo: String,
    camposDinamicos: [ campoDinamico ],
    keywords: [ String ],
    created_date: {
        type: Date,
        default: Date.now
    }
});