import ApartmentImg from "../../assets/lessor_rating.jpg";

function TopLessorsSection() {
    return (
        <div className="top_lessors_section row">
            <div className="topLessors_list_sec col-sm p-3">
                <h5 className="text-secondary">Discover</h5>
                <h2 className="text-primary">Top rated lessors</h2>
                <p className="text-light">Here are our top rated lessors </p>
                <ul className="list-group topLessors_list d-flex flex-row flex-wrap">
                    {/* the top rated cities list */}
                    <li className="list-group-item border-0">
                        <div className="row">
                            <div className="lessor_image_container border col-2"></div>
                            <div className="col">
                                <span>Zoubairi yassine</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item border-0">
                        <div className="row">
                            <div className="lessor_image_container border col-2"></div>
                            <div className="col">
                                <span>Ighoumran youssef</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item border-0">
                        <div className="row">
                            <div className="lessor_image_container border col-2"></div>
                            <div className="col">
                                <span>Ighoumran youssef</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item border-0">
                        <div className="row">
                            <div className="lessor_image_container border col-2"></div>
                            <div className="col">
                                <span>Qortoubi abdelhkim</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="popularCitiesSec_img col-sm align-self-center">
                <img src={ApartmentImg} className="img-fluid" alt="apartment" />
            </div>
        </div>
    );
}

export default TopLessorsSection;
