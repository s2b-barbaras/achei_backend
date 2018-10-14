"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const entityModel_1 = require("../models/entityModel");
const Entity = mongoose.model('Entity', entityModel_1.EntitySchema);
class entityController {
    buscarTodasEntidades(req, res) {
        Entity.find({}, (err, entity) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(entity);
            }
        });
    }
    listarEntidadesByTipo(req, res) {
        const tipoParam = req.params.tipo;
        Entity.find({ tipo: tipoParam }, (err, entity) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(entity);
            }
        });
    }
    removerEntidade(req, res) {
        Entity.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
    buscarEntidadeById(req, res) {
        EntityBath.findById(req.params.EntityId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    atualizarEntidade(req, res) {
        Entity.findOneAndUpdate({ _id: req.params.contactId }, req.body, { upsert: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    salvarEntidade(req, res) {
        let newEntity = new Entity(req.body);
        newEntity.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}
exports.entityController = entityController;
//# sourceMappingURL=Controller.js.map