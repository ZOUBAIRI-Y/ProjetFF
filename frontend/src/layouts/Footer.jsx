export default function Footer() {
    return (
        <div className="container-fluid bg-primary p-5">
            <div className="row">
                <div className="col-3">
                    <h3 className="text-success">Location</h3>
                    <p className="text-altlight">
                        We have built our reputation as true local area experts.
                    </p>
                    <h6 className="text-altlight">Ask us</h6>
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
                    </div>
                </div>
                <div className="col-3">
                    <h5 className="text-altlight text-center">services</h5>
                    <ul className="list-group footer_services_list">
                        <li className="list-group-item border-0 text-center">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                About us
                            </a>
                        </li>
                        <li className="list-group-item border-0 text-center">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Careers
                            </a>
                        </li>
                        <li className="list-group-item border-0 text-center">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                        <li className="list-group-item border-0 text-center">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Privacy & Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5 className="text-altlight text-center">Community</h5>
                    <ul className="list-group footer_services_list">
                        <li className="list-group-item border-0 text-center">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Find lessor
                            </a>
                        </li>
                        <li className="list-group-item border-0 text-center">
                            <a
                                href="#"
                                className="text-altlight text-decoration-none"
                            >
                                Our value
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5 className="text-altlight text-center">Follow us on</h5>
                    <div className="d-flex flex-row justify-content-center socialMedia_footer">
                        <a href="#">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-youtube"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
