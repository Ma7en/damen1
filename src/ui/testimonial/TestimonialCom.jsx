/* eslint-disable react/no-unescaped-entities */
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
    TbSquareRoundedArrowLeft,
    TbSquareRoundedArrowRight,
} from "react-icons/tb";

function TestimonialCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    let slides = document.querySelectorAll(".reviews .slide-container .slide");
    let index = 0;

    function next() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    function prev() {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    }

    return (
        <>
            <section className="reviews" id="reviews">
                {/* <div className="heading">
                    <span>client's reviews</span>
                    <h1>what say about us?</h1>
                </div> */}
                <h2 className="h2 section-title">client's reviews</h2>
                <p className="section-text">
                    Et harum quidem rerum facilis est et expedita distinctio nam
                    libero tempore cum soluta nobis eligendi cumque.
                </p>

                <div className="slide-container">
                    <TbSquareRoundedArrowLeft className="left" />

                    <div className="slide active">
                        <div className="image">
                            <img src="images/testimonials/pic-1.png" alt="" />
                        </div>

                        <div className="text ">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima libero ullam, facilis
                                similique nam possimus obcaecati tempore sunt
                                laboriosam alias?
                            </p>
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="image">
                            <img src="images/testimonials/pic-2.png" alt="" />
                        </div>

                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima libero ullam, facilis
                                similique nam possimus obcaecati tempore sunt
                                laboriosam alias?
                            </p>
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="image">
                            <img src="images/testimonials/pic-3.png" alt="" />
                        </div>

                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima libero ullam, facilis
                                similique nam possimus obcaecati tempore sunt
                                laboriosam alias?
                            </p>
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="image">
                            <img src="images/testimonials/pic-4.png" alt="" />
                        </div>

                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima libero ullam, facilis
                                similique nam possimus obcaecati tempore sunt
                                laboriosam alias?
                            </p>
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                    </div>

                    <TbSquareRoundedArrowRight className="right" />
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

export default TestimonialCom;
