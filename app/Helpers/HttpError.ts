import { Request, Response } from 'express'

export default class HttpError extends Error {
    constructor(code: number, status: string, message: string) {
        super(JSON.stringify({ code, status, message, error: true }))
        Object.setPrototypeOf(this, this.constructor.prototype)
    }

    public static handle(req: Request, res: Response, err: Error): Response {
        if (err instanceof this) {
            const error = JSON.parse(err.message)
            console.error(error)
            return res.status(error.code).send(error)
        }

        console.error(err)

        return res.status(500).send({
            code: 500,
            status: 'Internal server error!',
            message: `An error occured in server while ${req.method.toUpperCase()} '${req.url}'!`,
            error: true
        })
    }
}