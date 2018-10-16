import { PlaceController } from "../controllers/Controller";

export class Routes {    
    public placeController: PlaceController = new PlaceController();
        
    public routes(app): void {  
        app.route('/places')
         .get(this.placeController.getAllPlaces)

         app.route('/places/:tipo')
         .get(this.placeController.listPlacesByType)
         
         app.route('/place/:placeId')
         .get(this.placeController.getPlaceById)
         .delete(this.placeController.deletePlace)

         app.route('/place')
         .post(this.placeController.savePlace) 
         .put(this.placeController.updatePlace)
    }
}