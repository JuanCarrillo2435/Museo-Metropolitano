const routerDetails = require('express').Router();
const detailService = require('../services/detail.services')

routerDetails.get('/:objectID',detailService.getDetails)

module.exports = routerDetails