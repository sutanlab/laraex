import { Request, Response } from 'express'
import Http from '../Helpers/Http'
import HttpError from '../Helpers/HttpError'

class ProductController {
    public index(req: Request, res: Response) {
        // dummy data. only for demo
        const data: any[] = [
            { id: 1, name: 'Indomie', price: 2100 },
            { id: 2, name: 'Roti', price: 3000 },
            { id: 3, name: 'Aqua', price: 500 },
            { id: 4, name: 'Telur', price: 2500 },
            { id: 5, name: 'Beras', price: 9000 },
        ]

        try {
            return Http.send(res, {
                code: 200,
                status: 'OK!',
                message: `Success fetched ${data.length}`,
                data
            })
        } catch (err) {
            return HttpError.handle(req, res, err)
        }
    }

    public testError(req: Request, res: Response) {
        try {
            throw new HttpError(400, 'Bad Request', 'Test Error!!')
        } catch (err) {
            return HttpError.handle(req, res, err)
        }
    }
}

export default new ProductController()