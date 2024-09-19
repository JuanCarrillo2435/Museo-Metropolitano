const { searchExhibition} = require('../services/search.services');
const departmentService = require('../services/department.services')
const exhibitionService = require('../services/exhibition.services')

const searchFilter = async (req, res) => {
    const { q, departmentId, geoLocation } = req.query;
    
    if (!q) {
        return res.status(400).json({ error: 'El parámetro "q" es obligatorio.' });
    }

    try {
        const departments = await departmentService.getAllDepartments()
        const results = await exhibitionService.getExhibitions(q, departmentId, geoLocation);
        res.render('index',{departments,results});


    } catch (error) {
        console.error('Error en la búsqueda:', error);
        res.status(500).json({ error: 'Error al realizar la búsqueda.' });
    }
};

module.exports = { searchFilter };