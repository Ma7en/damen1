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
    TbClockHour3,
    TbMail,
    TbMapPin,
    TbPhone,
    TbWorld,
} from "react-icons/tb";

function ContactCom() {
    // const { isLoading, aboutus } = useAboutUs();

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <h2 className="h2 section-title">Contact Us</h2>
                    <p className="section-text">
                        Et harum quidem rerum facilis est et expedita distinctio
                        nam libero tempore cum soluta nobis eligendi cumque.
                    </p>

                    <div className="contact-wrapper">
                        <form action="" className="contact-form">
                            <div className="wrapper-flex">
                                <div className="input-wrapper">
                                    <label htmlFor="inputname">Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="inputname"
                                        required
                                        placeholder="Enter Your Name"
                                        className="input-field"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="inputemail">Email*</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="inputemail"
                                        required
                                        placeholder="Enter Your Email"
                                        className="input-field"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="textareamessage">
                                        Message*
                                    </label>

                                    <textarea
                                        name="message"
                                        id="textareamessage"
                                        required
                                        placeholder="Type Your Message"
                                        className="input-field"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                <span>Send Message</span>
                                <ion-icon name="paper-plane-outline" />
                            </button>
                        </form>

                        <ul className="contact-list">
                            <li>
                                <a
                                    href="mailto:support@website.com"
                                    className="contact-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbMail />
                                    <span>: Support@Damen.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://damen1.vercel.app/"
                                    className="contact-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbWorld />
                                    <span>: https://damen1.vercel.app/</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://damen1.netlify.app/"
                                    className="contact-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbWorld />
                                    <span>: https://damen1.netlify.app/</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+15159"
                                    className="contact-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbPhone />
                                    <span>: 15159</span>
                                </a>
                            </li>
                            <li>
                                <div className="contact-link" target="_blank">
                                    <TbClockHour3 />
                                    <span>: 9:00 AM - 6:00 PM</span>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="https://www.bing.com/maps?where=Building%20B144%20Smart%20Village%203rd%20Floor%20Km%2028%20%22Cairo-Alexandria%22%20Desert%20Road%20Giza%2C%20Egypt%2C%20Giza%2C%20Egypt%2012676%2C%20EG"
                                    className="contact-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TbMapPin />
                                    <address>
                                        : Building B144 Smart Village 3rd Floor
                                        Km 28 {'"Cairo-Alexandria"'} Desert Road
                                        Giza, Egypt، Giza، Egypt 12676، EG
                                    </address>
                                </a>
                            </li>
                        </ul>
                    </div>
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

export default ContactCom;
