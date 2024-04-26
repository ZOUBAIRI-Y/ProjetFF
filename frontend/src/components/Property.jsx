import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importing Heart icons from React Icons
import lessor from "../assets/lessor_rating.jpg";
import client from "../custom-axios";

export default function Property(props) {
    const [liked, setLiked] = useState(false);

    const handleLikeToggle = async () => {
        try {
            if (!liked) {
                await client.post(
                    `http://127.0.0.1:8000/api/properties/${props.data.id}/like`
                );
                console.log("Liked");
            } else {
                await client.post(
                    `http://127.0.0.1:8000/api/properties/${props.data.id}/unlike`
                );
                console.log("Unliked");
            }
            setLiked(!liked);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="m-4 property_component p-0 container border border-success rounded">
            <div
                id="propertyCarousel"
                className="p-2 carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {props.data.images ? (
                            <img
                                src={
                                    "http://127.0.0.1:8000" +
                                    props.data.images[0]
                                }
                                className="d-block"
                                alt="property image"
                            />
                        ) : (
                            <img
                                src={lessor}
                                className="d-block"
                                alt="property image"
                            />
                        )}
                    </div>
                    {props.data.images &&
                        props.data.images.length > 1 &&
                        props.data.images.map((v, i) => {
                            if (i === 0) return;
                            return (
                                <div key={i} className="carousel-item">
                                    <img
                                        src={
                                            "http://127.0.0.1:8000" +
                                            props.data.images[i]
                                        }
                                        className="d-block"
                                        alt="property image"
                                    />
                                </div>
                            );
                        })}
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
                <button
                    onClick={handleLikeToggle}
                    className="like_btn btn btn-light "
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
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
                    <strong className="fs-5">{props.data.price} DH</strong>{" "}
                    <span className="text-light p-0 m-0 Rental_type">/day</span>
                </p>
                <p className="text-light p-0 m-0">
                    <span className="num_of_rooms p-0 m-0">
                        {props.data.rooms} rooms
                    </span>
                    <span className="num_of_baths p-0 m-0">
                        {props.data.baths} baths
                    </span>
                </p>
                <p className="text-light availability p-0 m-0">Available</p>
                <Link
                    to={"/property-details/" + props.data.id}
                    className="text-primary text-decoration-none moreDetails_link m-0 float-end"
                >
                    More details
                </Link>
                <button className="call_now_btn btn btn-success text-white">
                    Call now
                </button>
            </div>
        </div>
    );
}
