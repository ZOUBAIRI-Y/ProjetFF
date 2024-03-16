import { Link } from "react-router-dom";
import ApartmentImg from "../assets/apartment.jpg";
import lessor from "../assets/lessor_rating.jpg";
import luffy from "../assets/luffy.jpg";
export default function Property() {
    return (
        <div className="property_component p-0 container border border-success rounded">
            {/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/425755208.jpg?k=617409aaddaf4b9d3ae02e6d9e0990902f470bfe78ec5fd61b628059b72ca376&o=&hp=1" alt="apartment" width="200px" /> */}
            <div
                id="propertyCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={lessor}
                            className="d-block"
                            alt="property image"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={ApartmentImg}
                            className="d-block"
                            alt="property image"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={luffy}
                            className="d-block"
                            alt="property image"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev bg-info"
                    type="button"
                    data-bs-target="#propertyCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next bg-info"
                    type="button"
                    data-bs-target="#propertyCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="property_infos p-2">
                <h5 className="text-primary fw-bold p-0 m-0 property_title">
                    Apartment
                </h5>
                <p className="text-altdark property_address p-0 m-0">
                    <strong>Address</strong>
                </p>
                <p className="text-success property_price p-0 m-0">
                    <strong className="fs-5">400.00 DH</strong>{" "}
                    <span className="text-light p-0 m-0 Rental_type">/day</span>
                </p>
                <p className="text-light p-0 m-0">
                    <span className="num_of_rooms p-0 m-0">? rooms</span>
                    <span className="num_of_baths p-0 m-0">? baths</span>
                </p>
                <p className="text-light availability p-0 m-0">
                    Available
                </p>
                <a
                    href="#"
                    className="text-primary text-decoration-none moreDetails_link m-0 float-end"
                >
                    More details
                </a>
                <button className="call_now_btn btn btn-success text-white">
                    Call now
                </button>
            </div>
        </div>
    );
}
