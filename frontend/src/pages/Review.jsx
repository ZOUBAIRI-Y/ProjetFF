import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../custom-axios";
import Property from "../components/Property";

function Review() {
    const { id } = useParams();
    const [prop, setProp] = useState({});
    const [reviewText, setReviewText] = useState("");
    const [reviewRating, setReviewRating] = useState(0);
    const [confirmedRent, setConfirmedRent] = useState(false);

    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/properties/" + id)
            .then(({ data }) => {
                setProp(data.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleReviewTextChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleReviewRatingChange = (e) => {
        setReviewRating(e.target.value);
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();

        if (!confirmedRent) {
            const confirmMessage = "Avez-vous loué cette propriété ?";
            if (!window.confirm(confirmMessage)) {
                return;
            }
        }

        const reviewData = {
            text: reviewText,
            rating: reviewRating,
            propertyId: id,
        };

        client
            .post("http://localhost:8000/api/reviews", reviewData)
            .then((response) => {
                console.log("Avis ajouté avec succès :", response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de l'ajout de l'avis :", error);
            });
    };

    return (
        <div className="p-4">
            <h2>Propriété :</h2>
            <div>{prop && <Property data={prop} />}</div>
            <h2>Ajouter un avis</h2>
            <form onSubmit={handleSubmitReview}>
                <div className="mb-3">
                    <label htmlFor="reviewText" className="form-label">
                        Texte de l'avis
                    </label>
                    <textarea
                        className="form-control"
                        id="reviewText"
                        value={reviewText}
                        onChange={handleReviewTextChange}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="reviewRating" className="form-label">
                        Note
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="reviewRating"
                        value={reviewRating}
                        onChange={handleReviewRatingChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="confirmedRent"
                        checked={confirmedRent}
                        onChange={(e) => setConfirmedRent(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="confirmedRent">
                        Je confirme avoir loué cette propriété.
                    </label>
                </div>
                <button type="submit" className="mt-2 mb-2 btn btn-primary">
                    Soumettre lavis
                </button>
            </form>
        </div>
    );
}

export default Review;
