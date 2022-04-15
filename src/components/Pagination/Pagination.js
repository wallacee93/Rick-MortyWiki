import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({info, pageNumber, setPageNumber}) => {

  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  }

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth)
  };

  useEffect(() => {

    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
    
  return ( 
    <>
    <style jsx>
      {`
      @media (max-width: 768px;) {
          .next, .prev {
            display: none;
          }
          .pagination {
            font-size: 12px;
          }
      }
      @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
      `}
    </style>
    
  <ReactPaginate 
    className="pagination justify-content-center gap-4 my-4"
    forcePage={pageNumber === 1? 0 : pageNumber - 1}
    nextLabel="Next"
    previousLabel="Previous"
    previousclassName="btn btn-primary fs-5 prev"
    nextclassName="btn btn-primary fs-5 next"
    activeclassName="active"
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    pageCount={info?.pages}
    pageclassName="page-item"
    pageLinkclassName="page-link"
  
  onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }}
   />
  </>
  );
};

export default Pagination