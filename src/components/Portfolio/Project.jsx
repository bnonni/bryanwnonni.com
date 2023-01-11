/* eslint-disable jsx-a11y/anchor-is-valid */
export const Project = ({ image, url, title, description }) => {
    return (
        <div className="col-md-4">
            <a href={url} rel="noreferrer" target="_blank">
                <div
                    className="project"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="desc">
                        <div className="con">
                            <h3>
                                <a>{title}</a>
                            </h3>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
