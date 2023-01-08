import { Project } from './Project';

export const Portfolio = (props) => {
    return (
        <div>
            <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                            data-animate-effect="fadeInLeft"
                        >
                            <span className="heading-meta">Portfolio</span>
                            <h2 className="colorlib-heading animate-box">
                                Recent Projects
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`}>
                                <Project
                                    title={d.title}
                                    description={d.description}
                                    image={d.image}
                                    url={d.url}
                                />
                            </div>
                        ))}
                    </div>
                    {/* <div className="row">
                        <div className="col-md-12 animate-box">
                            <p>
                                <a
                                    href="#"
                                    className="btn btn-primary btn-lg btn-load-more"
                                >
                                    Load more <i className="icon-reload" />
                                </a>
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};
