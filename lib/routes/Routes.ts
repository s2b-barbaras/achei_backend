import { entityController } from "../controllers/Controller";

export class Routes {    
    public entityController: entityController = new entityController();
        
    public routes(app): void {  
        app.route('/entidades')
         .get(this.entityController.buscarTodasEntidades)

         app.route('/entidades/:tipo')
         .get(this.entityController.listarEntidadesByTipo)
         
         app.route('/entidade/:id')
         .get(this.entityController.buscarEntidadeById)
         .delete(this.entityController.removerEntidade)

         app.route('/entidade')
         .post(this.entityController.salvarEntidade) 
         .put(this.entityController.atualizarEntidade)
    }
}