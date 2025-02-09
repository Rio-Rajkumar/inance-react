import React from "react";
import { Link } from "react-router-dom";
import Footercomponent from "./footer";

export default function About(){
    return(
        <>
          <section className="about">
                <div className="container-fuild px-5">
                    <div className="row">
                        <div className="col-12 py-5 d-flex justify-content-between flex-wrap">
                            <div className="col-12 col-md-5 detail-box">
                                <h2 className="fw-semibold" >ABOUT US</h2>
                                <p className="fw-medium" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                <Link className="button-blue px-5 py-1 fw-medium fs-4 text-decoration-none ">READ MORE</Link>                                
                            </div>
                            <div className="col-12 mt-5 mt-lg-0  col-md-6">
                                <img src={require("./image/about-img.jpg")} alt="" className="col-12" width={"100%"} height={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footercomponent/>
            
        </>
    )
}