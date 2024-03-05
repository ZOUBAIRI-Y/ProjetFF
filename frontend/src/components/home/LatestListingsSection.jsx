import Property from "../Property";

export default function LatestListingsSection() {
    return (
        <div className="latest_listings_section container mt-5">
            <h5 className="text-secondary">Discover</h5>
            <h2 className="text-primary">Latest listings</h2>
            <p>Here are the most recent listings, Find the perfect for you</p>
            <div className="listings_slider d-flex ">
                <Property />
            </div>
        </div>
    );
}
