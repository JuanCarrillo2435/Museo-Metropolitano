function getPaginationRange(currentPage, totalPages) {
  const maxPages = 5; 
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);
  return { startPage, endPage };
}

module.exports = {getPaginationRange}