const router = require('express').Router();
const exhibitionRouter = require('./department.routes.js')
async function index (req, res){  
    res.send('index');
}
const routesInit = (req,res) => {
    router.use('/',index)
    router.use('/exhibition',exhibitionRouter)

    return router;
}

module.exports ={routesInit}
