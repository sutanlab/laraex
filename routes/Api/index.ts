import Router from '../Router'
import ProductRoute from './Product'

class ApiRoute extends Router {
    public routes() {
        this.router.use('/products', ProductRoute)
    }
}

export default new ApiRoute().router