import "./Pagination.css";

const Pagination = (props: {
  paginationPage: number;
  setPaginationPage: Function;
  maxPage: number;
}) => {
  return (
    <div className="Pagination">
      {props.paginationPage > 1 && (
        <button
          className="Pagination__back Pagination__btn"
          onClick={() => props.setPaginationPage(props.paginationPage - 1)}
        >
          Previous
        </button>
      )}

      {props.paginationPage < props.maxPage && (
        <button
          className="Pagination__next Pagination__btn"
          onClick={() => props.setPaginationPage(props.paginationPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
