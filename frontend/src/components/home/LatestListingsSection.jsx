import { Link } from "react-router-dom";
import Property from "../Property";
import { useEffect, useState } from "react";
import client from "../../custom-axios";

export default function LatestListingsSection() {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("properties") === null) {
            client
                .get("http://127.0.0.1:8000/api/properties")
                .then(({ data }) => {
                    setList(data.data);
                    localStorage.setItem(
                        "properties",
                        JSON.stringify(data.data)
                    );
                    console.log(data);
                })

                .catch((err) => console.log(err));
        } else {
            setList(JSON.parse(localStorage.getItem("properties")));
        }
    }, []);
    return (
        <div className="latest_listings_section container mt-5">
            <h5 className="text-secondary">Discover</h5>
            <h2 className="text-primary">Latest listings</h2>

            <Link
                to={"/properties-list/all"}
                className="text-decoration-none text-primary seeMore_link float-end"
            >
                See more
            </Link>
            <p>Here are the most recent listings, Find the perfect for you</p>
            <div className="listings_slider  d-flex flex-wrap">
                {list && list.map((p) => <Property data={p} key={p.id} />)}
            </div>
        </div>
    );
}
