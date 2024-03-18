import ContactCom from "../../../ui/contact/ContactCom";
import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import LinksCom from "../../../ui/links/LinksCom";
// import ServiceComView from "../../../ui/services/ServiceComView";

function Service() {
    return (
        <>
            <Header />
            {/* <ServiceComView /> */}
            <ContactCom />
            <LinksCom />
            <Footer />
        </>
    );
}

export default Service;
