const PageNumberPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxPageNumbersToShow = 10,
}) => {
  const handlePageClick = (pageNumber) => {
    if (typeof pageNumber === "number") {
      onPageChange(pageNumber);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxPageNumbersToShow / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
      {getPageNumbers().map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(pageNumber)} // Update pageNumber click handling
          style={{
            padding: "8px",
            borderRadius: "4px",
            fontSize: "14px",
            background: currentPage === pageNumber ? "#FEF2E6" : "transparent",
            color: currentPage === pageNumber ? "#F78105" : "#667085",
            fontWeight: currentPage === pageNumber ? "bold" : "normal",
            cursor: pageNumber === "..." ? "default" : "pointer",
          }}
          disabled={pageNumber === "..."}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
