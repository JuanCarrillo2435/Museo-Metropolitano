const departmentService = require('../services/department.services')

async function renderHomePage(req,res) {
    try {
        const departments = await departmentService.getAllDepartments()
        res.render('index',{departments,results:null})
    } catch (error) {
        console.error(error);
    res.status(500).send("Error: "+error);
    }
}

module.exports={
    renderHomePage
}