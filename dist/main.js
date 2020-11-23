"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0'
});
server.get('/', (req, res, next) => {
    res.json({ message: 'initing', alt: 'confirm' });
    return next();
});

server.get('/info',(req,res,next)=>{
    res.json({
        browser: req.userAgent(),
        
    })
})

server.listen(3000, () => {
    console.log('init port 3000');
});


