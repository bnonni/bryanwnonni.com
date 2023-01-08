import { Post } from './Post';

export const Blog = (props) => {
    return (
        <div>
            <section className="colorlib-blog" data-section="blog" id="blog">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                            <span className="heading-meta">Blog</span>
                            <h2 className="colorlib-heading">Recent Posts</h2>
                        </div>
                    </div>
                    <div className="row">
                        {props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`}>
                                <Post
                                    url={d.url}
                                    image={d.image}
                                    alt={d.alt}
                                    date={d.date}
                                    tag={d.tag}
                                    title={d.title}
                                    description={d.description}
                                />
                            </div>
                        ))}
                    </div>
                    {/* <div className="row">
						<div className="col-md-12">
							<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
						</div>
					</div> */}
                </div>
            </section>
        </div>
    );
};

export default Blog;
