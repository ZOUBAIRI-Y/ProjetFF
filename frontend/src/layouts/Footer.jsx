export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="container-fluid bg-primary p-4 pb-0">
            <div className="row m-0">
                <div className="col-12">
                    <h3 className="text-success text-center fw-bold">
                        Location
                    </h3>
                    <p className="text-altlight text-center">
                        We have built our reputation as true local area experts.
                    </p>
                    {/* <h6 className="text-altlight">Ask us</h6>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                        >
                            Send
                        </button>
                    </div> */}
                </div>
                <div className="col-6 col-lg-4 mt-3 d-flex flex-column align-items-center">
                    <h5 className="text-altlight">services</h5>
                    <ul className="list-group footer_services_list ps-4">
                        <li className="list-group-item border-0">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                contact us
                            </a>
                        </li>
                        <li className="list-group-item border-0">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Privacy & Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-4 mt-3 d-flex flex-column align-items-center">
                    <h5 className="text-altlight">Community</h5>
                    <ul className="list-group footer_services_list">
                        <li className="list-group-item border-0">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Find lessor
                            </a>
                        </li>
                        <li className="list-group-item border-0">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Our value
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 mt-3">
                    <h5 className="text-altlight text-center">Follow us on</h5>
                    <div className="contactpage_social_media d-flex flex-row justify-content-center">
                        <a
                            href="https://web.whatsapp.com/"
                            target="blank"
                            className="whatsapp d-flex align-items-center justify-content-center"
                        >
                            <i className="bi bi-whatsapp fs-5 text-white"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="blank"
                            className="instagram d-flex align-items-center justify-content-center"
                        >
                            <i className="bi bi-instagram fs-5 text-white"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="blank"
                            className="twitter d-flex align-items-center justify-content-center"
                        >
                            <i className="bi bi-twitter-x fs-5 text-white"></i>
                        </a>
                    </div>
                </div>
                <div className="col-12 copyright_container text-white text-center pt-3 pb-2">
                    &copy; {currentYear} Location, All Rights Reserved.
                </div>
            </div>
        </div>
    );
}
