// import {
//     FaChevronRight,
//     FaEnvelope,
//     FaFacebookF,
//     FaInstagram,
//     FaLinkedinIn,
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaPinterestP,
//     FaTwitter,
//     FaWhatsapp,
// } from "react-icons/fa";
// import Logo from "../header/Logo";
// import { Link } from "react-router-dom";

import {
    TbBrandFacebook,
    TbBrandInstagram,
    TbBrandLinkedin,
    TbBrandX,
    TbBrandYoutube,
} from "react-icons/tb";

function LinksCom() {
    return (
        <>
            <div className="links">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img
                                src="/images/logo/logo-dark.png"
                                alt="Damen logo"
                            />
                        </a>

                        <p className="footer-text">
                            Cras ultricies mi eu turpis sit hendrerit fringilla
                            vestibulum ante ipsum primis in faucibus ultrices
                            posuere cubilia.
                        </p>

                        <ul className="social-list">
                            <li>
                                <a
                                    href="https://www.facebook.com/Damen.Epayment"
                                    className="social-link facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbBrandFacebook />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://twitter.com/damenepayment"
                                    className="social-link twitter"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbBrandX />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/damen.epayment"
                                    className="social-link instagram"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbBrandInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/damenepayment"
                                    className="social-link linkedin"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbBrandLinkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@damen.epayment"
                                    className="social-link youtube"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbBrandYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-box">
                        <ul className="footer-list">
                            <li>
                                <p className="footer-item-title">ABOUT US</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Strategy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Releases
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Mission
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-item-title">CUSTOMERS</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Tranding
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Popular
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Customers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Features
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-item-title">SUPPORT</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Developers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Customer Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <section className="links">
                <div className="container">
                    <div className="brand">
                        <Logo />

                        <p className="slogan"> 
                            Medcare. hospital database ReactJS Template.
                        </p>

                        <div className="social">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaLinkedinIn />
                            </a>
                            <a href="#">
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>

                    <div className="boxs">
                        <div className="box">
                            <h3>quick links</h3>

                            <ul>
                                <li>
                                    <Link to="/home">
                                        <FaChevronRight />
                                        <span>home</span>
                                    </Link>
                                </li>
                              
                                <li>
                                    <Link to="/aboutus">
                                        <FaChevronRight />
                                        <span>aboutUs</span>
                                    </Link>
                                </li>
                                 
                                <li>
                                    <Link to="/book">
                                        <FaChevronRight />
                                        <span>book</span>
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link to="/blogs">
                                        <FaChevronRight />
                                        <span>blogs</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>our services</h3>

                            <ul>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>dental care</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>message therapy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>cardioloty</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>diagnosis</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>ambulance service</span>
                                    </Link>
                                </li>
                            </ul>
                       
                        </div>

                        <div className="box">
                            <h3>contact info</h3>

                            <ul>
                                <li>
                                    <a href="tel:020123-456-7890">
                                        <FaPhoneAlt />
                                        <span>+020123-456-7890</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://wa.me/+020112223333"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaWhatsapp />
                                        <span>+02011-222-3333</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:shaikhanas@gmail.com?subject=Contact">
                                        <FaEnvelope />
                                        <span>shaikhanas@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:anasbhai@gmail.com?subject=Contact">
                                        <FaEnvelope />
                                        <span>anasbhai@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/@29.3084021,30.8428497,13z?entry=ttu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaMapMarkerAlt />
                                        <span>mumbai, india - 400104</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default LinksCom;
