/* eslint-disable no-unused-vars */
// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";
import {
    TbBulb,
    TbServer2,
    TbShieldCheckFilled,
    TbThumbUp,
    TbTrendingUp,
} from "react-icons/tb";

function AboutCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-icon">
                            {/* <ion-icon name="cube" /> */}
                            <TbBulb />
                        </div>

                        <h2 className="h2 about-title">Why Choose Us ?</h2>
                        <p className="about-text">
                            Nam libero tempore cum soluta as nobis est eligendi
                            optio cumque nihile impedite quo minus id quod
                            maxime.
                        </p>
                        <button className="btn btn-outline">Learn More</button>
                    </div>

                    <ul className="about-list">
                        <li>
                            <div className="about-card">
                                <div className="card-icon">
                                    {/* <ion-icon name="thumbs-up" /> */}
                                    <TbThumbUp />
                                </div>
                                <h3 className="h3 card-title">Esay To Use</h3>
                                <p className="card-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="about-card">
                                <div className="card-icon">
                                    {/* <ion-icon name="trending-up" /> */}
                                    <TbTrendingUp />
                                </div>
                                <h3 className="h3 card-title">
                                    Grow Your Revenue
                                </h3>
                                <p className="card-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="about-card">
                                <div className="card-icon">
                                    {/* <ion-icon name="shield-checkmark" /> */}
                                    <TbShieldCheckFilled />
                                </div>
                                <h3 className="h3 card-title">
                                    Analytics Security
                                </h3>
                                <p className="card-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="about-card">
                                <div className="card-icon">
                                    {/* <ion-icon name="server" /> */}
                                    <TbServer2 />
                                </div>
                                <h3 className="h3 card-title">Data Privacy</h3>
                                <p className="card-text">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem.
                                </p>
                            </div>
                        </li>
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

export default AboutCom;
