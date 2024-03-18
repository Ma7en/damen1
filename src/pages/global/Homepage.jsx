// import { useNavigate } from "react-router-dom";

import AboutCom from "../../ui/about/AboutCom";
import BlogsCom from "../../ui/blogs/BlogsCom";
import ContactCom from "../../ui/contact/ContactCom";
import Footer from "../../ui/footer/Footer";
import Header from "../../ui/header/Header";
import Landing from "../../ui/landing/Landing";
import LinksCom from "../../ui/links/LinksCom";
import TestimonialsCom from "../../ui/testimonial/TestimonialsCom";
import VideosCom from "../../ui/videos/VideosCom";

export default function Homepage() {
    // const navigate = useNavigate();

    return (
        <>
            <Header />
            <Landing />
            <AboutCom />
            <TestimonialsCom />
            <VideosCom />
            {/* <IconsCom /> */}
            {/* <ServicesCom /> */}
            {/* <DoctorsCom /> */}
            {/* <BookCom /> */}
            {/* <ReviewsCom /> */}
            <BlogsCom />
            <ContactCom />
            <LinksCom />
            <Footer />
        </>
    );
}
