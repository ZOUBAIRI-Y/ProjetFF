import { Link } from "react-router-dom";
import ApartmentImg from "../assets/apartment.jpg";
import lessor from "../assets/lessor_rating.jpg"
export default function Property() {
    return (
        <div className="property_component p-0 container d-flex flex-column align-items-start justify-content-center border border-success rounded-2">
            {/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/425755208.jpg?k=617409aaddaf4b9d3ae02e6d9e0990902f470bfe78ec5fd61b628059b72ca376&o=&hp=1" alt="apartment" width="200px" /> */}
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ApartmentImg} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={ApartmentImg} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="property_infos p-3">
                <h4 className="text-primary fw-bold fs-3 pt-0 pb-0 property_title">
                    Apartment
                </h4>
                <p className="text-altdark property_address pt-0 pb-0 m-0">
                    <strong>Address</strong>
                </p>
                <p className="text-success property_price pt-1 pb-1 m-0">
                    <strong className="fs-4">400.00 DH</strong>{" "}
                    <span className="text-light Rental_type">/day</span>
                </p>
                <p className="text-light pt-0 pb-0 m-0">
                    <span className="num_of_rooms">? rooms</span> |{" "}
                    <span className="num_of_baths">? baths</span>
                </p>
                <p className="text-light availability pt-0 pb-0 m-0">
                    Available
                </p>
                <a
                    href="#"
                    className="text-primary text-decoration-none moreDetails_link mb-2"
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
