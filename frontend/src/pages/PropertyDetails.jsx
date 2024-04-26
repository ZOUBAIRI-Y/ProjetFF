import { useEffect, useState } from "react";
import client from "../custom-axios";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
    const { id } = useParams();

    const [prop, setProp] = useState({});
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [lessorInfo, setLessorInfo] = useState({});

    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/properties/" + id)
            .then(({ data }) => {
                console.log(data.data);
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
                console.log(data.data);
            })
            .catch((err) => console.log(err.response.data));
    };

    return (
        <div className="property-details p-5">
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
            <div className="comments">
                <h2>Comments:</h2>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.text}</p>
                        <p>Posted By: {comment.user.name}</p>
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
                        <p>Rating: {review.rating}</p>
                        <p>Posted By: {review.user.name}</p>
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
        </div>
    );
}
