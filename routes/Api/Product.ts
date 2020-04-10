import ProductController from 'app/Controllers/Product'
import Router from 'routes/Router'

class ProductRoute extends Router<typeof ProductController> {
    constructor() {
        super(ProductController)
    }

    public routes() {
        this.router.get('/', this.bindHandler(ProductController.index))
        this.router.get('/testerror', this.bindHandler(ProductController.testError))
    }
}

export default new ProductRoute().router