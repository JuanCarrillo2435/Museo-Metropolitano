const { searchExhibition } = require("../services/search.services");
const departmentService = require("../services/department.services");
const exhibitionService = require("../services/exhibition.services");
const {getPaginationRange} = require("../utils/paginationRange")

const searchFilter = async (req, res) => {
    
    const baseUrl = req.url.replace(/(\&|\?)page=\d+/g, '').replace("/","/search")
  const { q, departmentId, geoLocation, page = 0 } = req.query;

  try {
    const departments = await departmentService.getAllDepartments();
    const results = await exhibitionService.getExhibitions(
      q,
      departmentId,
      geoLocation,
      page
    );
    const { startPage, endPage } = getPaginationRange(parseInt(page), results.totalPages);
    res.render("index", {
      departments : departments,
      results : results.results,
      totalPages : results.totalPages,
      currentPage :  parseInt(page),
      baseUrl : baseUrl,
      startPage,
      endPage
    });
  } catch (error) {
    const departments = await departmentService.getAllDepartments();
    console.error("Error en la búsqueda:", error);
    res.render("index", {
      departments : departments,
      results : null ,
      totalPages : null,
      currentPage :  null,
      baseUrl : null,
      startPage : null,
      endPage : null
    });
  }
};

module.exports = { searchFilter };
