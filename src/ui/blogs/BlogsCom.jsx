// import { FaCalendar, FaChevronRight, FaUser } from "react-icons/fa";

import { TbCalendarSmile, TbChevronRight, TbUser } from "react-icons/tb";

// import { blogs } from "../../utils/vars";
// import BlogCom from "./BlogCom";

function BlogsCom() {
    return (
        <>
            <section className="blog" id="blog">
                <div className="container">
                    <h2 className="h2 section-title">Latest News</h2>
                    <p className="section-text">
                        Et harum quidem rerum facilis est et expedita distinctio
                        nam libero tempore cum soluta nobis eligendi cumque.
                    </p>

                    <ul className="blog-list">
                        <li>
                            <div className="blog-card">
                                <figure className="blog-banner">
                                    <img
                                        src="/images/blog-banner-1.jpg"
                                        alt="Best Traveling Place"
                                    />
                                </figure>

                                <div className="blog-meta">
                                    <span>
                                        {/* <TbCalendarSmile /> */}
                                        <TbCalendarSmile />
                                        <time dateTime="2021-04-10">
                                            april 10 2021
                                        </time>
                                    </span>

                                    <span>
                                        <TbUser />
                                        <p>admin</p>
                                    </span>
                                </div>
                                <h3 className="blog-title">
                                    Best Traveling Place
                                </h3>
                                <p className="blog-text">
                                    Integer ante arcu accumsan a consectetuer
                                    eget posuere mauris praesent adipiscing
                                    phasellus ullamcorper ipsum rutrum punc.
                                </p>
                                <a href="#" className="blog-link-btn">
                                    <span>Learn More</span>
                                    <TbChevronRight />
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="blog-card">
                                <figure className="blog-banner">
                                    <img
                                        src="/images/blog-banner-2.jpg"
                                        alt="Private Meeting Room"
                                    />
                                </figure>
                                <div className="blog-meta">
                                    <span>
                                        <TbCalendarSmile />
                                        <time dateTime="2021-04-10">
                                            april 10 2021
                                        </time>
                                    </span>
                                    <span>
                                        <TbUser />
                                        <p>admin</p>
                                    </span>
                                </div>
                                <h3 className="blog-title">
                                    Private Meeting Room
                                </h3>
                                <p className="blog-text">
                                    Integer ante arcu accumsan a consectetuer
                                    eget posuere mauris praesent adipiscing
                                    phasellus ullamcorper ipsum rutrum punc.
                                </p>
                                <a href="#" className="blog-link-btn">
                                    <span>Learn More</span>
                                    <TbChevronRight />
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="blog-card">
                                <figure className="blog-banner">
                                    <img
                                        src="/images/blog-banner-3.jpg"
                                        alt="The Best Business Ideas"
                                    />
                                </figure>
                                <div className="blog-meta">
                                    <span>
                                        <TbCalendarSmile />
                                        <time dateTime="2021-04-10">
                                            april 10 2021
                                        </time>
                                    </span>
                                    <span>
                                        <TbUser />
                                        <p>admin</p>
                                    </span>
                                </div>
                                <h3 className="blog-title">
                                    The Best Business Ideas
                                </h3>
                                <p className="blog-text">
                                    Integer ante arcu accumsan a consectetuer
                                    eget posuere mauris praesent adipiscing
                                    phasellus ullamcorper ipsum rutrum punc.
                                </p>
                                <a href="#" className="blog-link-btn">
                                    <span>Learn More</span>
                                    <TbChevronRight />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* <section className="blogs" id="blogs">
                <div className="container">
                    <h1 className="heading">
                        our
                        <span>blogs</span>
                    </h1>

                    <div className="box-container">
                        {blogs.map((blog) => (
                            <BlogCom blog={blog} key={blog.id} />
                        ))}

                    </div>
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default BlogsCom;
