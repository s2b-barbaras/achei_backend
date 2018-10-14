import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EntitySchema = new Schema({
    localizacao: {
        latitude: number,
        longitude: number
    },
    descricao: String,
    tipo: String,
    camposDinamicos [
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