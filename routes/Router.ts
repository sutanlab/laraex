import { Router, RequestHandler } from 'express'

export default abstract class<T = object> {
    public router: Router
    private binder: T | undefined

    constructor(binder?: T) {
        this.router = Router()
        this.binder = binder
        this.routes()
    }

    protected bindHandler(handler: RequestHandler): RequestHandler {
        if (typeof this.binder !== 'object') {
            throw new Error(`If you want to use 'bindHandler' method, property 'binder' must be 'object' which has RequestHandler. Received: '${typeof this.binder}'`)
        }
        return handler.bind(this.binder)
    }

    protected abstract routes(): void
}