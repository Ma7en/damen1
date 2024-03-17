// import { useNavigate } from "react-router-dom";

import AboutCom from "../../ui/about/AboutCom";
import BlogsCom from "../../ui/blogs/BlogsCom";
import ContactCom from "../../ui/contact/ContactCom";
import Footer from "../../ui/footer/Footer";
import Header from "../../ui/header/Header";
import Landing from "../../ui/landing/Landing";
import LinksCom from "../../ui/links/LinksCom";
import TestimonialCom from "../../ui/testimonial/TestimonialCom";
import VideosCom from "../../ui/videos/VideosCom";

// import Header from "../ui/header/Header";
// import Landing from "../ui/landing/Landing";
// import IconsCom from "../ui/icons/IconsCom";
// import ServicesCom from "../ui/services/ServicesCom";
// import AboutCom from "../ui/about/AboutCom";
// import DoctorsCom from "../ui/doctors/DoctorsCom";
// import BookCom from "../ui/book/BookCom";
// import ReviewsCom from "../ui/reviews/ReviewsCom";
// import BlogsCom from "../ui/blogs/BlogsCom";
// import LinksCom from "../ui/links/LinksCom";
// import Footer from "../ui/footer/Footer";

export default function Homepage() {
    // const navigate = useNavigate();

    return (
        <>
            <Header />
            <Landing />
            <AboutCom />
            <TestimonialCom />
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
