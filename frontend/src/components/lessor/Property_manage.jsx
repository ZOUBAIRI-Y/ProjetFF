import { useNavigate } from "react-router-dom";

function Property_manage(props) {
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm("vous etes sure?");

        if (isConfirmed) {
            props.onDelete(props.data.id);
        }
    };

    return (
        <div className="row m-0">
            <div className="col-md-4 img_container p-1 pt-0">
                {props.data.images && (
                    <img
                        src={"http://127.0.0.1:8000" + props.data.images[0]}
                        alt="apartment"
                    />
                )}
            </div>
            <div className="col-md-5 property_quickInfos align-self-center p-3 ">
                <h6
                    className="property_address m-0 text-dark"
                    name="property_address"
                >
                    Address: {props.data.address}
                </h6>
                <p className="property_price m-0" name="property_price">
                    <strong className="text-success">
                        Price: {props.data.price} dh
                    </strong>{" "}
                    <span name="rental_type" className="text-light">
                        /day
                    </span>
                </p>
            </div>
            <div className="col-md-3 property_actions d-flex flex-row align-items-center justify-content-center p-1 pt-0 pb-0">
                <button
                    onClick={() =>
                        navigate("/lessor/update-listing/" + props.data.id)
                    }
                    className="btn btn-success me-1"
                >
                    Modify
                </button>
                <button onClick={handleDeleteClick} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Property_manage;
