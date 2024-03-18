/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer ">
                <div className="container">
                    <p className="copyright">
                        Copyright © {new Date().getFullYear()} Damen epayment |
                        Powered by Mazen Saad
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
