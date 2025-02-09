import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import './style.css';


export default function Maincomponent() {
    return (
        <>
        <BrowserRouter>
            <header className="header" >
                <nav class="navbar navbar-expand-lg px-4 ">
                    <div class="container-fluid">
                        <h4 className="fw-bold text-white" href="#">INANCE</h4>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="col-12 d-flex justify-content-lg-end">
                                <div class="navbar-nav w-50">
                                    <ul className="list-inline m-0 d-flex flex-wrap justify-content-lg-between w-100">
                                        <li className="col-12 col-lg-3 text-decoration-none" ><Link to={"/"} class="nav-link" href="#">Home</Link></li>
                                        <li className="col-12 col-lg-3 text-decoration-none"><Link to={"about"} class="nav-link" href="#">About</Link></li>
                                        <li className="col-12 col-lg-3 text-decoration-none"><Link to={"services"} class="nav-link" href="#">Services</Link></li>
                                        <li className="col-12 col-lg-3 text-decoration-none"><Link to={"contact"} class="nav-link">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </BrowserRouter>

        </>
    )
}