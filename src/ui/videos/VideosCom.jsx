/* eslint-disable no-unused-vars */
// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";

import { Videos } from "../../utils/vars";
import VideoCom from "./VideoCom";

function VideosCom() {
    // const { isLoading, aboutus } = useAboutUs();

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="videos" id="videos">
                <div className="container">
                    <h2 className="h2 section-title">Latest videos</h2>
                    <p className="section-text">
                        Et harum quidem rerum facilis est et expedita distinctio
                        nam libero tempore cum soluta nobis eligendi cumque.
                    </p>

                    <ul className="videos-list">
                        {Videos.map((video) => (
                            <li key={video.id}>
                                <div className="video-card">
                                    <VideoCom
                                        src={
                                            video.url ||
                                            video.src ||
                                            "/vidoes/neurorons.mp4"
                                        }
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* <section className="about" id="about">
                <div className="container">
                    <Heading as="h2">
                        <span>about</span>
                        us
                    </Heading>

                    {aboutus.map((about) => (
                        <div className="row" key={about.id}>
                            <Picture
                                src={"images/about/about-img.svg"}
                                alt={about.image.alt}
                                caption={about.image.caption}
                            />

                            <div className="content">
                                <Heading as="h3">
                                    {about.title || title}
                                </Heading>
                                <p>{about.summary || summary}</p>

                                <Link to="/aboutus" className="btn">
                                    <span>learn more</span>
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    ))}

        
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default VideosCom;
