"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../controllers/Controller");
class Routes {
    constructor() {
        this.entityController = new Controller_1.entityController();
    }
    routes(app) {
        app.route('/entidades')
            .get(this.entityController.buscarTodasEntidades);
        app.route('/entidades/:tipo')
            .get(this.entityController.listarEntidadesByTipo);
        app.route('/entidade/:id')
            .get(this.entityController.buscarEntidadeById)
            .delete(this.entityController.removerEntidade);
        app.route('/entidade')
            .post(this.entityController.salvarEntidade)
            .put(this.entityController.atualizarEntidade);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map