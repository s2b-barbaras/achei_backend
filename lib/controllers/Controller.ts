import * as mongoose from 'mongoose';
import { PlaceSchema } from '../models/placeModel';
import { Request, Response } from 'express';

const Place = mongoose.model('Place', PlaceSchema);

export class PlaceController {
    public getAllPlaces (req: Request, res: Response) {
        Place.find({}, (err, place) => {
            if(err) {
                res.send(err);
            } else {
                res.json(place);
            }
        })
    }
    public listPlacesByType (req: Request, res: Response) {
        const tipoParam = req.params.tipo;
        Place.find({tipo: tipoParam}, (err, place) => {
            if(err) {
                res.send(err);
            } else {
                res.json(place);
            }
        })
    }
    public deletePlace (req: Request, res: Response) {           
        Place.remove({ _id: req.params.placeId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
    public getPlaceById (req: Request, res: Response) {           
        Place.findById(req.params.placeId, (err, place) => {
            if(err){
                res.send(err);
            }
            res.json(place);
        });
    }
    public updatePlace (req: Request, res: Response) {           
        Place.findOneAndUpdate({ _id: req.params.placeId }, req.body, { upsert: true }, (err, place) => {
            if(err){
                res.send(err);
            }
            res.json(place);
        });
    }
    public savePlace (req: Request, res: Response) {                
        let newPlace = new Place(req.body);
        newPlace.save((err, place) => {
            if(err){
                res.send(err);
            }    
            res.json(place);
        });
    }
    
    
}
