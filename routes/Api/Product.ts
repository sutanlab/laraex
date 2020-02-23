import Router from '../Router'
import ProductController from '../../app/Controllers/Product'

class ProductRoute extends Router {
    public routes() {
        this.router.get('/', ProductController.index)
        this.router.get('/testerror', ProductController.testError)
    }
}

export default new ProductRoute().router