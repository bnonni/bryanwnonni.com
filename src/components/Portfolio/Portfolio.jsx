import React from 'react';
import { Project } from './Project';
import { LoadMore } from '../LoadMore';

export const Portfolio = props => {
    const [limit, setLimit] = React.useState(5);
    return (
        <div>
            <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3"
                            data-animate-effect="fadeInLeft"
                        >
                            <span className="heading-meta">Portfolio</span>
                            <h2 className="colorlib-heading">
                                Recent Projects
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {props.data.slice(0, limit).map((post, i) =>
                            <div key={`${post.title}-${i}`}>
                                <Project
                                    title={post.title}
                                    description={post.description}
                                    image={post.image}
                                    url={post.url}
                                />
                            </div>
                        )}
                    </div>
                    <LoadMore onClick={() => setLimit(limit => limit + 5)} />
                </div>
            </section>
        </div>
    );
};
