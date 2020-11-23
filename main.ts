import * as restify from 'restify'

const server = restify.createServer({
    name: 'meat-api',
    version: '1.0'
})

server.get('/',(req,res,next)=>{
    res.json({message:'initing',alt:'confirm'})
    return next()
})

server.listen(3000,()=>{
    console.log('init port 3000');
})
