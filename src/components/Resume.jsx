export const Resume = props => {
    return (
        <div>
            <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3"
                            data-animate-effect="fadeInLeft"
                        >
                            <span className="heading-meta">Resume</span>
                            <h2 className="colorlib-heading">Resume</h2>
                        </div>
                    </div>
                    <div className="row">
                        <iframe
                            style={{
                                width: '100%',
                                height: '50em'
                            }}
                            title={props.data.title}
                            src={props.data.url}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
