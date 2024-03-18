/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

import {
    TbSquareRoundedArrowLeft,
    TbSquareRoundedArrowRight,
} from "react-icons/tb";
import { Testimonials } from "../../utils/vars";
import TestimonialCom from "./TestimonialCom";

function TestimonialsCom() {
    // const { isLoading, aboutus } = useAboutUs();

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(
                (prevIndex) => (prevIndex + 1) % Testimonials.length
            );
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
    };

    const prev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
        );
    };

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

                <div className="container">
                    <TbSquareRoundedArrowLeft className="left" onClick={prev} />

                    {Testimonials.map((testimonial, index) => (
                        <TestimonialCom
                            testimonial={testimonial}
                            key={testimonial.id}
                            className={
                                index === activeIndex ? "slide active" : "slide"
                            }
                        />
                    ))}

                    <TbSquareRoundedArrowRight
                        className="right"
                        onClick={next}
                    />
                </div>
            </section>
        </>
    );
}

export default TestimonialsCom;
