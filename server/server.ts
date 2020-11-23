import * as restify from 'restify'

export class Server {
    
    initRoutes(): Promise<any>{
        return new Promise((resolve,reject)=>{
            try{
                const server = restify.createServer({
                    name: 'meat-api',
                    version: '1.0'
                })
            }
        })
    }
    
    bootstrap(): Promise<Server>{
        return this.initRoutes().then(()=>this)
    } 
}