const { searchExhibition } = require("../services/search.services");
const departmentService = require("../services/department.services");
const exhibitionService = require("../services/exhibition.services");
const {getPaginationRange} = require("../utils/paginationRange")

const searchFilter = async (req, res) => {
    
    const baseUrl = req.url.replace(/(\&|\?)page=\d+/g, '').replace("/","/search")
    console.log("🚀 ~ searchFilter ~ baseUrl:", baseUrl)
    console.log("🚀 ~ searchFilter ~ req.url:", req.url)
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
      console.log("🚀 ~ searchFilter ~ page:", page)
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    res.status(500).json({ error: "Error al realizar la búsqueda." });
  }
};

module.exports = { searchFilter };
