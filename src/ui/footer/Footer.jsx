/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer ">
                <div className="container">
                    <p className="copyright">
                        Copyright © {new Date().getFullYear()} Damen epayment |
                        Powered by Damen
                        {/* © {new Date().getFullYear()}{" "}
                        <Link to="/home"> codewithsadee</Link>. All Right
                        Reserved */}
                    </p>
                </div>
            </footer>

            {/* <section className="footer">
                <div className="container">
                    <div className="credit">
                        created by
                        <a> mr. mazen saad</a> all rights reserved
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default Footer;
