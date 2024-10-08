const departmentService = require('../services/department.services')
const exhibitionService = require('../services/exhibition.services')

async function renderHomePage(req,res) {
    try {
        const departments = await departmentService.getAllDepartments()
        res.render('index',{departments,results:null,totalPages:null , currentPage:null, queryParams:null, baseUrl:null})
    } catch (error) {
        console.error(error);
    res.status(500).send("Error: "+error);
    }
}


module.exports={
    renderHomePage,
}