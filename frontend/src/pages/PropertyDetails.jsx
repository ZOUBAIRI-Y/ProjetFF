import { useEffect, useState } from "react";
import client from "../custom-axios";
import { useNavigate, useParams } from "react-router-dom";
import Property from "../components/Property";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importing Heart icons from React Icons

export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [prop, setProp] = useState({});
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [lessorInfo, setLessorInfo] = useState({});
    const [newCommentText, setNewCommentText] = useState("");
    const [liked, setLiked] = useState(false);
    const handleAddComment = () => {
        const commentData = {
            content: newCommentText,
            propertyId: id,
        };

        client
            .post("http://localhost:8000/api/comments", commentData)
            .then(({ data }) => {
                console.log("Comment added successfully:", data);
                setComments((prevComments) => [...prevComments, data]);
                setNewCommentText("");
            })
            .catch((err) => {
                console.error("Error adding comment:", err);
            });
    };
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
    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/properties/" + id)
            .then(({ data }) => {
                console.log("prop", data.data);
                setProp(data.data);
                setComments(data.data.comments);
                setReviews(data.data.reviews);
                fetchLessorInfo(data.data.lessorId);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const fetchLessorInfo = (lessorId) => {
        client
            .get("http://localhost:8000/api/lessors/" + lessorId)
            .then(({ data }) => {
                setLessorInfo(data.data);
                console.log("lessor", data.data);
            })
            .catch((err) => console.log(err.response.data));
    };
    useEffect(() => {
        const handleScroll = () => {
            const stickyDiv = document.getElementById("callCard");
            const container = document.querySelector(
                ".property_details_carousel_container"
            );
            if (window.scrollY >= 354) {
                stickyDiv.classList.add("sticky");
            } else {
                stickyDiv.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const shareIcon = (
        <svg
            viewBox="0 0 22 22"
            className="icon"
            fill="currentColor"
            width="1em"
            height="1.2em"
            aria-hidden="true"
        >
            <path d="M12.492.902a.954.954 0 0 1 1.047.227l8.029 8.404a.956.956 0 0 1 0 1.321l-8.029 8.405a.956.956 0 0 1-1.647-.66v-4.618c-3.867-.023-7.358-.031-9.992 3.658a.957.957 0 0 1-1.71-.767l.131-.491a17.338 17.338 0 0 1 2.337-4.873c1.751-2.516 4.662-5.089 9.234-5.406V1.789c0-.391.237-.742.6-.887Zm-8.84 12.595c2.649-1.483 5.609-1.455 8.228-1.43.328.003.651.006.967.006h.956v4.141l5.752-6.02-5.752-6.021v3.808h-.956c-4.319 0-6.989 2.276-8.62 4.619-.209.3-.4.601-.575.897Z"></path>
        </svg>
    );
    return (
        <>
            <div className="container-fluid property_d_genInfo_carousel_container bg-info mt-4 p-0">
                <div className="property_d_carousel_container p-0 m-0">
                    <div
                        id="propertyCarousel"
                        className="carousel slide property_d_carousel h-100 p-3"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner row m-0">
                            {prop.images &&
                                prop.images.length >= 1 &&
                                prop.images.map((v, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="carousel-item col-sm-6 images_list_item_container active p-0 "
                                        >
                                            <img
                                                src={
                                                    "http://127.0.0.1:8000" +
                                                    prop.images[i]
                                                }
                                                alt="property image"
                                                className="w-100"
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                        <button
                            className="carousel-control-prev bg-primary custom_carousel_control"
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
                            className="carousel-control-next bg-primary custom_carousel_control"
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
                </div>
                <div
                    className="property_d_callCard text-center bg-white border border-1  rounded p-2 "
                    id="callCard"
                >
                    <div className="like_share_container d-flex flex-row justify-content-center mt-2">
                        <button className="property_d_share_btn btn btn-altlight rounded-circle me-1">
                            <div>
                                {shareIcon}
                            </div>
                        </button>
                        <button
                            onClick={handleLikeToggle}
                            className="property_d_like_btn btn btn-altlight rounded-circle ms-1"
                        >
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                    <hr />
                    <p>
                        Take a tour over live video, or in-person with the
                        leasing agent. Choose the day and time that works for
                        you.
                    </p>
                    <hr />
                    <button className="btn btn-outline-success w-100 mb-2">
                        Request tour
                    </button>
                    <button
                        onClick={() =>
                            alert(
                                lessorInfo.phone1
                                    ? lessorInfo.phone1
                                    : "non trouver"
                            )
                        }
                        className="call_now_btn btn btn-success text-white"
                    >
                        Call now
                    </button>
                </div>
                <div className="property_carousel_infos p-4 pt-1">
                    <span className="fs-4 fw-medium p-0 m-0">{prop.category ? prop.category.name : ""}</span><br />
                    <span className="fw-medium p-0 m-0">{prop.address}</span><br />
                    <span>{prop.price}dh | </span>
                    <span>{prop.rooms}rooms |</span>
                    <span>{prop.baths}baths</span><br />
                    <span>Published by {lessorInfo.name}</span>
                </div>
            </div>

            <nav className="">

            </nav>
            <hr />
            {prop &&
                prop.images &&
                prop.images.map((m) => (
                    <img src={"http://127.0.0.1:8000" + m} key={Date.now} />
                ))}
            <div className="property-info">
                <h2>Description:</h2>
                <p>{prop.description}</p>
                <h2>Price:</h2>
                <p>${prop.price}</p>
                <h2>Deposit:</h2>
                <p>${prop.deposite}</p>
                <h2>Space:</h2>
                <p>{prop.space} sq ft</p>
                <h2>Address:</h2>
                <p>{prop.address}</p>
                <h2>Baths:</h2>
                <p>{prop.baths}</p>
                <h2>Category:</h2>
                <p>{prop.category ? prop.category.name : ""}</p>
                <h2>City:</h2>
                <p>{prop.city ? prop.city.name : ""}</p>
                <h2>Created At:</h2>
                <p>
                    {prop.createdAt
                        ? new Date(prop.createdAt).toLocaleDateString()
                        : ""}
                </p>
                <h2>Ready Date:</h2>
                <p>
                    {prop.readyDate
                        ? new Date(prop.readyDate).toLocaleDateString()
                        : ""}
                </p>
                <h2>Renting Type:</h2>
                <p>{prop.rentingType}</p>
                <h2>Lessor ID:</h2>
                <p>{prop.lessorId}</p>
            </div>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => navigate("/review/" + id)}
            >
                Add unreview
            </button>
            <hr />
            <div className="comments">
                <h2>Comments:</h2>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <b>{comment.content}</b>
                        <p>
                            {/* Posted By: {comment.user.name && comment.user.name} */}
                        </p>
                        <p>
                            Date:{" "}
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="reviews">
                <h2>Reviews:</h2>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.text}</p>
                        <p>
                            Rating: {review.rating} <b>Star</b>
                        </p>
                        {/* <p>Posted By: {review.user.name}</p> */}
                        <p>
                            Date:{" "}
                            {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="lessor-info">
                <h2>Lessor Information:</h2>
                <p>First Name: {lessorInfo.firstname}</p>
                <p>Last Name: {lessorInfo.lastname}</p>
                <p>Email: {lessorInfo.email}</p>
                <p>Address: {lessorInfo.address}</p>
                <p>Phone 1: {lessorInfo.phone1}</p>
                <p>Phone 2: {lessorInfo.phone2}</p>
            </div>
            <hr />
            <h2>Autre Lessor properties:</h2>
            <div className="lessor-info d-flex flex-wrap">
                {lessorInfo &&
                    lessorInfo.properties &&
                    lessorInfo.properties.map((p) => (
                        <Property data={p} key={p.id} />
                    ))}
            </div>
            <hr />
            <div className="add-comment">
                <h2>Aouter un Comment:</h2>
                <textarea
                    value={newCommentText}
                    className="form-control"
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Type your comment here..."
                ></textarea>
                <button className="btn btn-primary" onClick={handleAddComment}>
                    Add Comment
                </button>
            </div>
            <hr />
        </>
    );
}
