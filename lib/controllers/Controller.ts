import * as mongoose from 'mongoose';
import { EntitySchema } from '../models/entityModel';
import { Request, Response } from 'express';

const Entity = mongoose.model('Entity', EntitySchema);

export class entityController {
    public buscarTodasEntidades (req: Request, res: Response) {
        Entity.find({}, (err, entity) => {
            if(err) {
                res.send(err);
            } else {
                res.json(entity);
            }
        })
    }
    public listarEntidadesByTipo (req: Request, res: Response) {
        const tipoParam = req.params.tipo;
        Entity.find({tipo: tipoParam}, (err, entity) => {
            if(err) {
                res.send(err);
            } else {
                res.json(entity);
            }
        })
    }
    public removerEntidade (req: Request, res: Response) {           
        Entity.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
    public buscarEntidadeById (req: Request, res: Response) {           
        Entity.findById(req.params.EntityId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public atualizarEntidade (req: Request, res: Response) {           
        Entity.findOneAndUpdate({ _id: req.params.contactId }, req.body, { upsert: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    public salvarEntidade (req: Request, res: Response) {                
        let newEntity = new Entity(req.body);
        newEntity.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }
    
    
}
