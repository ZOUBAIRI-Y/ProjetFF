import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importing Heart icons from React Icons
import lessor from "../assets/lessor_rating.jpg";
// import lessor from "../assets/house.webp";
import client from "../custom-axios";

export default function Property(props) {
    const [liked, setLiked] = useState(false);
    // const [contact, setContact] = useState(false);

    const lessor_phone = (lessorId) => {
        client
            .get("http://127.0.0.1:8000/api/lessors/" + lessorId)
            .then(({ data }) => {
                console.log(data.data);
                alert(data.data.phone1 ? data.data.phone1 : "Non Trouver");
            })
            .catch((err) => console.log(err));
    };
    // alert(props.data.lessorId ? props.data.phone1 : "Telephone Non Trouver.");
    // console.log(props.data);
    useEffect(() => {
        if (
            props &&
            props.data.likes &&
            props.data.likes.length > 0 &&
            props.data.likes[0].userId &&
            props.data.likes[0].userId == localStorage.getItem("id")
        ) {
            setLiked(true);
        }
    }, [props]);

    const handleLikeToggle = async () => {
        try {
            setLiked(!liked);
            if (!liked) {
                await client.post(
                    `http://127.0.0.1:8000/api/properties/${props.data.id}/like`
                );
                alert("Liked");
            } else {
                await client.post(
                    `http://127.0.0.1:8000/api/properties/${props.data.id}/unlike`
                );
                alert("Unliked");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="card border-success property_component">
            <div
                id="propertyCarousel"
                className="carousel slide carousel_section"
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
                                        alt="property image"
                                    />
                                </div>
                            );
                        })}
                </div>
                <button
                    className="carousel-control-prev bg-success custom_carousel_control"
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
                    className="carousel-control-next bg-success custom_carousel_control"
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
                    className="like_btn btn btn-altlight rounded-circle"
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
            <div className="card-body p-2 infos_section">
                <h5 className="card-title text-primary fw-bold p-0 m-0">
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
                <button
                    onClick={() => lessor_phone(props.data.lessorId)}
                    className="call_now_btn btn btn-success text-white"
                >
                    Call now
                </button>
            </div>
        </div>
    );
}
