/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import Heading from "../global/Heading";
import Button from "../global/Button";

function Landing() {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="h1 hero-title">Creative Landing Page</h1>
                        <p className="hero-text">
                            A creative &amp; modern landing page with Damen
                            template &amp; We love make things amazing.
                        </p>
                        <p className="form-text">
                            <span>🥳</span> Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur that is fugit.
                        </p>

                        <form action="" className="hero-form">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter Your Email"
                                className="email-field"
                            />

                            <button type="submit" className="btn btn-primary">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <figure className="hero-banner">
                        <img
                            src="/images/landing/landing.png"
                            alt="Hero image"
                        />
                    </figure>
                </div>
            </section>

            {/* <section className="landing" id="landing">
                <div className="container">
                    <div className="image">
                        <img src="/images/home/home-img.svg" alt="home" />
                    </div>

                    <div className="content">
                        <Heading as="h3">stay safe, stay healthy</Heading>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem sed autem vero? Magnam, est laboriosam!
                        </p>

 
                        <Button
                            to="/book"
                            // className="btn"
                            onClick={() => navigate("/book")}
                        >
                            <span>contact us</span> 
                            <FaChevronRight />
                        </Button>
                    </div>
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default Landing;
