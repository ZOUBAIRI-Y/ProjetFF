import { useEffect, useState } from "react";
import client from "../custom-axios";
import { Link, useNavigate, useParams } from "react-router-dom";
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
                ".property_d_genInfo_carousel_container"
            );

            if (window.scrollY >= 272) {
                stickyDiv.classList.add("sticky");
            } else {
                stickyDiv.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", handleScroll);
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
    // useEffect(() => {
    //     const imageList = document.querySelector(".image_list");
    //     const slideButtons = document.querySelectorAll(".row .slide_btn");
    //     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    //     slideButtons.forEach((button) => {
    //         button.addEventListener("click", () => {
    //             const direction = button.id === "prev-slide" ? -1 : 1;
    //             const scrollAmount = imageList.clientWidth * direction;
    //             imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    //         });
    //     });
    //     const handleSlideBtns = () => {
    //         const isMobile = window.innerWidth <= 576;
    //         if (isMobile) {
    //             slideButtons.forEach((button) => {
    //                 button.style.display = "none";
    //             });
    //         } else {
    //             slideButtons[0].style.display =
    //                 imageList.scrollLeft <= 0 ? "none" : "block";
    //             slideButtons[1].style.display =
    //                 imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    //         }
    //     };
    //     imageList.addEventListener("scroll", () => {
    //         handleSlideBtns();
    //     });
    // }, []);
    useEffect(() => {
        const imageList = document.querySelector(".image_list");
        const slideButtons = document.querySelectorAll(".row .slide_btn");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        slideButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
    }, []);

    return (
        <>
            <div className="container-fluid property_d_genInfo_carousel_container bg-info mt-4 p-0">
                <div className="property_d_carousel_container p-0 m-0 p-2">
                    <div className="row m-0 image_list snaps_inline flex-nowrap p-2 ps-2 h-100">
                        <button className="slide_btn" id="prev-slide">
                            <i className="bi bi-caret-left-fill"></i>
                        </button>
                        {prop &&
                            prop.images &&
                            prop.images.map((m, i) => (
                                <div
                                    className="property_d_carousel_item col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 p-0 me-2 h-100"
                                    key={i}
                                >
                                    <img
                                        src={"http://127.0.0.1:8000" + m}
                                        className="w-100 h-100"
                                    />
                                </div>
                            ))}
                        <button className="slide_btn" id="next-slide">
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                </div>
                <div
                    className="property_d_callCard text-center bg-white border border-1  rounded p-2 "
                    id="callCard"
                >
                    <div className="like_share_container d-flex flex-row justify-content-center mt-2">
                        <button className="property_d_share_btn btn btn-altlight rounded-circle me-1">
                            <div>{shareIcon}</div>
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
                <div className="property_carousel_infos container pt-3 pb-4 ">
                    <p className="fs-5 fw-bold text-primary p-0 m-0 d-inline">
                        {prop.category ? prop.category.name : ""}
                    </p>
                    <div className="like_share_phone_container d-inline ms-4 float-end">
                        <button className="_phone_sharebtn btn btn-altlight rounded-circle me-1">
                            <div>{shareIcon}</div>
                        </button>
                        <button
                            onClick={handleLikeToggle}
                            className="_phone_likebtn btn btn-altlight rounded-circle"
                        >
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                    <p className="fw-medium p-0 m-0">{prop.address}</p>
                    <p className="m-0">
                        <span className="fw-bold">{prop.price}dh | </span>
                        <span>{prop.rooms}rooms |</span>
                        <span>{prop.baths}baths</span>
                    </p>
                    <p className="m-0">Published by {lessorInfo.name}</p>
                    <div className="property_d_phone_callCard d-flex flex-row mt-2">
                        <button className="btn btn-outline-success w-50 me-1">
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
                            className="btn btn-success text-white w-50 ms-1"
                        >
                            Call now
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="property_d_overview_container container"
                id="property_overview"
            >
                <nav className="navbar navbar-expand-md overview_navbar ">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link
                                to={"#property_overview"}
                                className="nav-link active fw-medium text-primary "
                            >
                                Overview
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="property_d_overview  pt-3">
                    <h2 className="fs-5">Description:</h2>
                    <p>{prop.description}</p>
                    <h2 className="fs-5">City:</h2>
                    <p>{prop.city ? prop.city.name : ""}</p>
                    <h2 className="fs-5">Address:</h2>
                    <p>{prop.address}</p>
                    <div className="row m-0 price_deposit_space mb-3">
                        <div className="col col-lg-4 p-0 pe-1">
                            <div className="border rounded p-2 h-100">
                                <h2 className="fs-5 fw-bold">Price:</h2>
                                <p className="m-0">
                                    {prop.price}dh
                                    <span className="text-light">
                                        /{prop.rentingType}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-4 p-0 ps-sm-1 pe-1 ">
                            <div className="border rounded p-2 h-100">
                                <h2 className="fs-5 fw-bold">Deposit:</h2>
                                <p className="m-0">${prop.deposite}</p>
                            </div>
                        </div>
                        <div className="col col-lg-4 p-0 ps-sm-1 ">
                            <div className="border rounded p-2 h-100">
                                <h2 className="fs-5 fw-bold">Space:</h2>
                                <p className="m-0">{prop.space} sq ft</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="fs-5">Ready at:</h2>
                <p>
                    {prop.readyDate
                        ? new Date(prop.readyDate).toLocaleDateString()
                        : ""}
                </p>
                <div className="row m-0 p-0">
                    <div className="col-12 col-sm-4 col-md-12 col-lg-4 p-0 align-self-center">
                        <h2 className="fs-5">Published by:</h2>
                        <p className="fs-5 fw-bold text-primary">
                            {lessorInfo.name}
                        </p>
                    </div>
                    <div className="col-12 col-sm-8 col-md-12 col-lg-8 p-0">
                        <div className="lessor_info card">
                            <div className="card-header p-3 ps-1">
                                <h2 className="fs-4 m-0 text-center">
                                    {lessorInfo.name}
                                </h2>
                            </div>
                            <div className="card-body p-2">
                                <div className="row m-0 property_d_lessorInfo">
                                    <div className="col-7 col-lg-8 d-flex flex-column justify-content-center p-0">
                                        <p className="m-0">
                                            <span className="fw-medium">
                                                First Name:{" "}
                                            </span>
                                            {lessorInfo.firstname}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-medium">
                                                Last Name:
                                            </span>{" "}
                                            {lessorInfo.lastname}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-medium">
                                                Email:{" "}
                                            </span>{" "}
                                            {lessorInfo.email}
                                        </p>
                                        {lessorInfo.address && (
                                            <p>
                                                <span className="fw-medium">
                                                    Address:{" "}
                                                </span>{" "}
                                                {lessorInfo.address}
                                            </p>
                                        )}
                                        <p className="m-0">
                                            <span className="fw-medium">
                                                phone1:{" "}
                                            </span>{" "}
                                            {lessorInfo.phone1}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-medium">
                                                phone2:{" "}
                                            </span>{" "}
                                            {lessorInfo.phone2}
                                        </p>
                                    </div>
                                    <div className="col-5 col-lg-4 property_d_lessorImg_container p-0">
                                        <img
                                            src={
                                                "http://127.0.0.1:8000" +
                                                lessorInfo.avatar
                                            }
                                            alt="profile picture"
                                            className=""
                                        />
                                        <button
                                            className="btn btn-success w-100 mt-2 text-white"
                                            onClick={() =>
                                                navigate("/review/" + id)
                                            }
                                        >
                                            Rate lessor
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="fs-4 m-0">
                        <span className="text-primary fw-bold">
                            {lessorInfo.name}'s other properties
                        </span>
                    </h2>
                    <div className="row listings_slider snaps_inline m-0 mt-3 flex-nowrap overflow-auto pb-2">
                        {lessorInfo &&
                            lessorInfo.properties &&
                            lessorInfo.properties.map((p) => (
                                <div
                                    className="col-9 col-sm-6 col-md-9 col-lg-6 col-xl-4 p-0 pe-2"
                                    key={p.id}
                                >
                                    <Property data={p} />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="comments_section">
                    <div className="add-comment mt-3">
                        <h2 className="fs-4 m-0">Leave a comment</h2>
                        <div className="text_area_container">
                            <textarea
                                value={newCommentText}
                                className="form-control"
                                onChange={(e) =>
                                    setNewCommentText(e.target.value)
                                }
                                placeholder="Type your comment here..."
                            ></textarea>
                            <button
                                className="btn btn-primary add_comment_btn"
                                onClick={handleAddComment}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                    <div className="comments mt-3">
                        {comments.map((comment) => (
                            <div key={Math.random()}>
                                <b>{comment.content}</b>
                                <p>
                                    Date:{" "}
                                    {new Date(
                                        comment.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                        <ul className="list-group">
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
