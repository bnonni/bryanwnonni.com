import React from 'react';

export const Project = ({ image, url, title, description }) => {
    return (
        <div className="col-md-4 animate-box">
            <div
                className="project"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="desc">
                    <div className="con">
                        {' '}
                        <h3>
                            <a href={url}>{title}</a>
                        </h3>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
