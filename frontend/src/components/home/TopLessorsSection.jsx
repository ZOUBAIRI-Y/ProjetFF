import ApartmentImg from "../../assets/lessor_rating.jpg";

function TopLessorsSection() {
    return (
        <div className="popular_cities_section row">
            <div className="popularCitiesSec_list col-sm p-3">
                <h5 className="text-secondary">Discover</h5>
                <h2 className="text-primary">Latest listings</h2>
                <p className="text-light">
                    Here are the most recent listings, Find the perfect for you
                </p>
                <ul className="list-group">
                    {/* the top rated cities list */}
                    <li className="list-group-item border-0 text-light">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span>Agadir</span>
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
