import { useEffect, useState } from "react";
import client from "../custom-axios";
import { useNavigate, useParams } from "react-router-dom";
import Property from "../components/Property";

export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [prop, setProp] = useState({});
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [lessorInfo, setLessorInfo] = useState({});
    const [newCommentText, setNewCommentText] = useState("");

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

    return (
        <div className="property-details p-5">
            <button
                onClick={() =>
                    alert(lessorInfo.phone1 ? lessorInfo.phone1 : "non trouver")
                }
                className="call_now_btn btn btn-success text-white mb-3"
            >
                Call now
            </button>
            <h1 className="mb-4">Property Details: </h1>
            <hr />
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
        </div>
    );
}
