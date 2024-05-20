export const LoadMore = (props) => {
  const { onClick } = props;
  return (
    <div className="row">
      <div className="col-md-12 animate-box">
        <p>
          <button
            onClick={onClick}
            className="btn btn-primary btn-lg btn-load-more">
            Load more <i className="icon-reload" />
          </button>
        </p>
      </div>
    </div>
  );
};
