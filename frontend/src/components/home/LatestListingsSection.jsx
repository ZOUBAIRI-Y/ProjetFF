import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const handleLinkClick = (id) => {
        navigate(`/property-details/${id}`);
    };

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

            <div className="row listings_slider snaps_inline m-0 flex-nowrap overflow-auto p-3 pb-2">
                {list &&
                    list.map((p) => (
                        <div
                            className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 p-0 ps-1 pe-1 property_list_item"
                            key={p.id}
                            onClick={() => handleLinkClick(p.id)}
                        >
                                <Property data={p} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
