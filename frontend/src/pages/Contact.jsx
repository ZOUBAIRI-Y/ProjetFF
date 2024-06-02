import Header from "../layouts/Header";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact_page_content">
            <div className="contactpage_main p-5">
                <h1 className="text-primary contact_title text-center fw-bold">
                    Contact us!
                </h1>
                <p className="text-center w-100">
                    We're here to help and answer any questions you might have.
                    We look forward to hearing from you! Feel free to reach out
                    via the links below.
                </p>
                <div className="contactpage_social_media d-flex flex-row justify-content-center">
                    <a href="https://web.whatsapp.com/" target="blank" className="whatsapp d-flex align-items-center justify-content-center">
                        <i className="bi bi-whatsapp fs-5 text-white"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="blank" className="instagram d-flex align-items-center justify-content-center">
                        <i className="bi bi-instagram fs-5 text-white"></i>
                    </a>
                    <a href="https://twitter.com" target="blank" className="twitter d-flex align-items-center justify-content-center">
                        <i className="bi bi-twitter-x fs-5 text-white"></i>
                    </a>
                    <a href="https://mail.google.com/" target="blank" className="email d-flex align-items-center justify-content-center">
                        <i className="bi bi-envelope-at fs-5 text-white"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
