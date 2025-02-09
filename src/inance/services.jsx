import React from "react";
import { Link } from "react-router-dom";
import Footercomponent from "./footer";

export default function Services() {
    return (
        <>
            <section className="Our-services">
                <div className="container-fuild px-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center" >OUR SERVICES</h1>
                            <div className="col-12 service-content">
                                <div className="service-box">
                                    <img src={require("./image/s1.png")} alt="" width={80} />
                                    <h5 className="fw-semibold py-2" >Maintenance</h5>
                                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                </div>
                                <div className="service-box ">
                                    <img src={require("./image/s2.png")} alt="" width={80} />
                                    <h5 className="fw-semibold py-2" >Maintenance</h5>
                                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                </div>
                                <div className="service-box ">
                                    <img src={require("./image/s3.png")} alt="" width={80} />
                                    <h5 className="fw-semibold py-2">Maintenance</h5>
                                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                </div>
                                <div className="col-12 text-center my-5">
                                <Link className="button-blue px-5 py-1 fw-medium fs-4 text-decoration-none ">READ MORE</Link>
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