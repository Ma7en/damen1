/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaBars, FaHeartbeat, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DarkModeToggle from "../themes/DarkModeToggle";
import Logo from "./Logo";
import { TbHome2, TbMenu2 } from "react-icons/tb";

function Header() {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
        });
    }, []);

    return (
        <>
            <header className={`header ${navbar && "active"}`} data-header>
                <div className="container">
                    <Logo />

                    {/* <button className="menu-toggle-btn" data-nav-toggle-btn>
                        <TbMenu2 />
                    </button> */}

                    {navbar ? (
                        <FaTimes
                            className="fa-times menu-toggle-btn"
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            className="menu-toggle-btn"
                            id="menu-btn "
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )}

                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li>
                                <NavLink to="/home" className="navbar-link">
                                    <TbHome2 />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/aboutus" className="navbar-link">
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/services" className="navbar-link">
                                    Services
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink
                                    to="/How-to-pay"
                                    className="navbar-link"
                                >
                                    How to pay
                                </NavLink>
                            </li> */}
                            {/* 
                            <li>
                                <NavLink
                                    to="/store-locator"
                                    className="navbar-link"
                                >
                                    store locator
                                </NavLink>
                            </li> */}

                            {/* <li>
                                <NavLink to="/news" className="navbar-link">
                                    news
                                </NavLink>
                            </li> */}

                            {/* <li>
                                <NavLink to="/careers" className="navbar-link">
                                    Careers
                                </NavLink>
                            </li> */}

                            <li>
                                <NavLink
                                    to="/merchants-services"
                                    className="navbar-link"
                                >
                                    Merchants Services
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink
                                    to="/services-provider"
                                    className="navbar-link"
                                >
                                    Services Provider
                                </NavLink>
                            </li> */}

                            {/* <li>
                                <NavLink
                                    to="/damen-cash-app"
                                    className="navbar-link"
                                >
                                    Damen Cash App
                                </NavLink>
                            </li> */}

                            {/* <li>
                                <NavLink
                                    to="/customer-feedback"
                                    className="navbar-link"
                                >
                                    Customer Feedback
                                </NavLink>
                            </li> */}

                            <li>
                                <NavLink
                                    to="/contactus"
                                    className="navbar-link"
                                >
                                    contact us
                                </NavLink>
                            </li>
                        </ul>

                        {/* <div className="header-actions">
                            <a href="#" className="header-action-link">
                                Log in
                            </a>
                            <a href="#" className="header-action-link">
                                Register
                            </a>
                        </div> */}
                    </nav>
                </div>
            </header>

            {/* 
            icon home
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M10 12h4v4h-4z" />
</svg>
            */}

            {/* <header className="header">
                <div className="container">
                    <Logo />

                    <DarkModeToggle />

                    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
                        <ul>
                            <li>
                                <NavLink to="/home">home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/book">book</NavLink>
                            </li>

                            <li>
                                <NavLink to="/blogs">blogs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/aboutus">aboutUs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/login">login</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {navbar ? (
                        <FaTimes
                            className="fa-times"
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )}
 
                </div>
            </header> */}
        </>
    );
}

export default Header;
