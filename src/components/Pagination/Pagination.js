import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({info, pageNumber, setPageNumber}) => {

    
  return <ReactPaginate 
  className="pagination justify-content-center"
  nextLabel="Next"
  previousLabel="Previous"
  nextClassName="btn btn-primary"
  pageCount={info?.pages} />
  
};

export default Pagination