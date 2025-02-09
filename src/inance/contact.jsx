import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footercomponent from "./footer";

export default function Contact() {

    return (
        <>
            <section className="contact mt-5">
                <div className="container-fuild px-5">
                    <div className="row">
                        <div className="col-12 ">
                            <h2 className="fw-semibold">CONTACT US</h2>
                            <div className="col-12 d-flex flex-wrap justify-content-between">
                                <div className="col-lg-5 col-sm-10 col-11 contact-form">
                                    <input type="text" className="form-control my-4 p-3 " placeholder="Name" />
                                    <input type="text" className="form-control my-4 p-3" placeholder="Phone Number" />
                                    <input type="text" className="form-control my-4 p-3" placeholder="Email" />
                                    <textarea name="" id="" cols="63" rows="5" className="form-control p-3" placeholder="Message"></textarea>
                                    <div className="col-12 my-5">
                                        <Link className="button-blue px-5 py-1 fw-medium fs-5 text-decoration-none ">SEND</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-10 col-11 d-flex justify-content-start my-4">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d501290.0349529937!2d76.96723499999999!3d11.013968899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738471781376!5m2!1sen!2sin" className="col-12" height="400" style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footercomponent/>

        </>
    )
}