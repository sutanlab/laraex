import { Request, Response } from 'express'
import Controller from 'app/Controllers/Controller'

class ProductController extends Controller {
    public index(req: Request, res: Response): void {
        // dummy data. only for demo
        const data: any[] = [
            { id: 1, name: 'Indomie', price: 2100 },
            { id: 2, name: 'Roti', price: 3000 },
            { id: 3, name: 'Aqua', price: 500 },
            { id: 4, name: 'Telur', price: 2500 },
            { id: 5, name: 'Beras', price: 9000 },
        ]

        try {
            this.send(res, {
                code: 200,
                status: 'OK!',
                message: `Success fetched ${data.length}`,
                data
            })
        } catch (err) {
            this.handleError(req, res, err)
        }
    }

    public testError(req: Request, res: Response): void {
        try {
            this.setError(400, 'Bad Request', 'Test Error!!')
        } catch (err) {
            this.handleError(req, res, err)
        }
    }
}

export default new ProductController()