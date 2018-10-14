"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.EntitySchema = new Schema({
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
    keywords: ['pago'],
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=entityModel.js.map