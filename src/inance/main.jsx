import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import './style.css';
import Homecom from "./home";


export default function Maincomponent() {
    return (
        <>
            <BrowserRouter>
                <header className="header" >
                    <nav className="navbar navbar-expand-lg px-4 ">
                        <div className="container-fluid">
                            <h4 className="fw-bold text-white">INANCE</h4>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="col-12 d-flex justify-content-lg-end">
                                    <div className="navbar-nav w-50">
                                        <ul className="list-inline m-0 d-flex flex-wrap justify-content-lg-between w-100">
                                            <li className="col-12 col-lg-3 text-decoration-none" ><Link to={"/"} className="nav-link active" >Home</Link></li>
                                            <li className="col-12 col-lg-3 text-decoration-none"><Link to={"/about"} className="nav-link">About</Link></li>
                                            <li className="col-12 col-lg-3 text-decoration-none"><Link to={"/services"} className="nav-link" >Services</Link></li>
                                            <li className="col-12 col-lg-3 text-decoration-none"><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Homecom />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Homecom/>

            </BrowserRouter>

        </>
    )
}