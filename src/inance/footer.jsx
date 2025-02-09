import React from "react";

export default function Footercomponent() {
    return (
        <>
            <section className="contact-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="fw-semibold mt-5 text-center">GET IN TOUCH</h2>
                            <div className="col-12 boxs-contact my-5">
                                <div className="col-12 icons-contact flex-wrap d-flex justify-content-between ">
                                    <div className=" box-icon text-center">
                                        <i class='bx bx-current-location  p-2 ' style={{ fontSize: "3rem" }}></i>
                                        <p className="my-1">Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className=" box-icon text-center">
                                        <i class='bx bxs-phone p-2' style={{ fontSize: "3rem", }}></i>
                                        <p className="my-1">+02 1234567890</p>
                                    </div>
                                    <div className="box-icon text-center">
                                        <i class='bx bxl-gmail  p-2' style={{ fontSize: "3rem" }}></i>
                                        <p className="my-1">demo@gmail.com</p>
                                    </div>
                                </div>
                                {/* <hr /> */}
                            </div>
                            <div className="col-12 text-center">
                                <h4>FOLLOW US</h4>
                                <div className="col-12 mt-4 d-flex justify-content-center flex-wrap">
                                    <div className="website-link">
                                        <i class='bx bxl-facebook'></i>
                                        <i class='bx bxl-twitter' ></i>
                                        <i class='bx bxl-youtube' ></i>
                                        <i class='bx bxl-instagram' ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5 pt-3 text-center">
                            <hr className="" />
                                <p>© 2025 All Rights Reserved By Free Html Templates</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}