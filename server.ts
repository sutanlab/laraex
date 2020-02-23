import express, { Application } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

export default class Server {
    private application: Application
    private port: number | string

    constructor() {
        this.port = process.env.PORT || 3000
        this.application = express()
        this.plugins()
        this.routes()
    }

    private plugins(): void {
        dotenv.config()
        this.application.use(express.urlencoded({ extended: true }))
        this.application.use(express.json())
        this.application.use(compression())
        this.application.use(helmet())
        this.application.use(cors())
        this.application.use(morgan('dev'))
    }

    private routes(): void {
        this.application.use(routes)
    }

    public run(): void {
        this.application.listen(this.port, () => {
            console.log(`Server listening on http://localhost:${this.port}`)
        })
    }
}
