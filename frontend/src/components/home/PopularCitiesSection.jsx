import ApartmentImg from "../../assets/apartment.jpg";
import { useEffect, useState } from "react";
import client from "../../custom-axios";

function PopularCitiesSection() {
    const [list, setList] = useState([]);
    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/cities")
            .then(({ data }) => {
                setList(data.data);
            })

            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="popular_cities_section row">
            <div className="popularCitiesSec_img col-sm align-self-center">
                <img src={ApartmentImg} className="img-fluid" alt="apartment" />
            </div>
            <div className="popularCitiesSec_list col-sm p-3">
                <h5 className="text-secondary">Discover</h5>
                <h2 className="text-primary">Popular cities</h2>
                <p className="text-light">
                    Here are the most popular places for rent{" "}
                </p>
                <ul className="list-group">
                    {/* the top rated cities list */}
                    {list &&
                        list.map((c) => (
                            <div key={c.id}>
                                <li className="list-group-item border-0 text-light">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <span>{c.name}</span>
                                </li>
                                <br />
                            </div>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default PopularCitiesSection;
