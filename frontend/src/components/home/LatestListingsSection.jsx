import { Link } from "react-router-dom";
import Property from "../Property";

export default function LatestListingsSection() {
    return (
        <div className="latest_listings_section container mt-5">
            <h5 className="text-secondary">Discover</h5>
            <h2 className="text-primary">Latest listings</h2>

            <Link
                to={"/properties-list"}
                className="text-decoration-none text-primary seeMore_link float-end"
            >
                See more
            </Link>
            <p>Here are the most recent listings, Find the perfect for you</p>
            <div className="listings_slider d-flex ">
                <Property />
                <Property />
            </div>
        </div>
    );
}
