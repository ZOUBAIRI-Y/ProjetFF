// import Apartment from "../../assets/apartment.jpg";
function Property_manage(props) {
    return (
        <div className="row m-0">
            <div className="col-md-4 img_container p-1 pt-0">
                <img src={props.image} alt="apartment" />
            </div>
            <div className="col-md-5 property_quickInfos align-self-center p-3 ">
                {/* <p className="property_address text-dark" name="property_address">Address: Bloc 04 Ait melloul Inezgane</p> */}
                <h6
                    className="property_address m-0 text-dark"
                    name="property_address"
                >
                    Address: {props.address}
                </h6>
                <p className="property_price m-0" name="property_price">
                    <strong className="text-success">
                        Price: {props.price} dh
                    </strong>{" "}
                    <span name="rental_type" className="text-light">
                        /day
                    </span>
                </p>
            </div>
            <div className="col-md-3 property_actions d-flex flex-row align-items-center justify-content-center p-1 pt-0 pb-0">
                <button className="btn btn-success me-1">Modify</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Property_manage;
