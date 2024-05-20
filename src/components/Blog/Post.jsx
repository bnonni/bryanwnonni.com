export const Post = ({ url, image, alt, date, tag, title, description }) => {
  return (
    <div className="col-md-4 col-sm-6 animate-box">
      <div className="blog-entry">
        <a href={url} className="blog-img">
          <img src={image} className="img-responsive" alt={alt} />
          <div className="desc">
            <span>
              <small>{date}</small> | <small> {tag} </small>{" "}
            </span>
            <h3> {title} </h3>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};
