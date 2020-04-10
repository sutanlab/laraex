import express, { Request, Response } from 'express'
import Http from 'app/Helpers/Http'
import { PUBLIC_PATH } from 'configs'
import Router from './Router'
import ApiRoute from './Api'

class Routes extends Router {
    public routes() {
        this.router.use('/api', ApiRoute)

        // static files
        this.router.use(express.static(PUBLIC_PATH))

        // routing fallback
        this.router.use('*', (req: Request, res: Response): void => {
            Http.send(res, {
                code: 404,
                status: 'Not Found',
                message: 'Sorry, HTTP resource you are looking for was not found.',
                error: true
            })
        })
    }
}

export default new Routes().router