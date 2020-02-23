import { Response } from 'express'

export interface HttpResponse<T> {
    code: number,
    status: string,
    message: string,
    error?: boolean,
    data?: T
}

export default class Http {
    public static send = <T>(res: Response, data: HttpResponse<T>): Response => (
        res.status(data.code).send({ ...data, error: false })
    )
} 