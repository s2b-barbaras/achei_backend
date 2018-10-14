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
    camposDinamicos: [
        {
            label: String,
            valor: any
        }, {}, {}
    ],
    keywords: [ 'pago' ],
    created_date: {
        type: Date,
        default: Date.now
    }
});