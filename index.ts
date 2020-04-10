declare global {
    namespace NodeJS {
        interface Global {
            __basedir: string
        }
    }
}

global.__basedir = __dirname

import Server from './server'

// start server
const server = new Server()
server.run()
