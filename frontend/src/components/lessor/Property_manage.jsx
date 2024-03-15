import Apartment from "../../assets/apartment.jpg";
function Property_manage() {
    return (
        <div className="row">
            <div className="col-md-3 img_container">
                <img src={Apartment} alt="apartment" />
            </div>
            <div className="col-md-5 property_quickInfos align-self-center pt-2">
                {/* <p className="property_address text-dark" name="property_address">Address: Bloc 04 Ait melloul Inezgane</p> */}
                <h6 className="property_address m-0 text-dark" name="property_address">Address: Bloc 04 Ait melloul Inezgane</h6>
                <p className="property_price" name="property_price"><strong className="text-success">Price: 250.00 dh</strong> <span name="rental_type" className="text-light">/day</span></p>
            </div>
            <div className="col-md-4 property_actions d-flex flex-row align-items-center justify-content-center">
                <button className="btn btn-success me-1">Modify</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Property_manage;
