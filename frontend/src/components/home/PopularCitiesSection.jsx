import { useEffect, useState } from "react";
import client from "../../custom-axios";
import { Link } from "react-router-dom";
import popularC_main from "../../assets/popularC_section/popularC_main.png";

function PopularCitiesSection() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const C_villResponse = await client.get(
                    "http://127.0.0.1:8000/api/cities"
                );
                setList(C_villResponse.data.data);
                localStorage.setItem(
                    "cities",
                    JSON.stringify(C_villResponse.data.data)
                );
            } catch (error) {
                console.log(error);
            }
        };

        if (!localStorage.getItem("cities")) {
            fetchData();
        } else {
            setList(JSON.parse(localStorage.getItem("cities")));
        }
    }, []);

    return (
        <div className="container">
            <div className="popular_cities_section row m-0 p-0">
                <div className="popularCimg_container col-12 h-100 col-md-7 col-lg-6 p-0 align-self-center">
                    <img
                        src={popularC_main}
                        className="img-fluid w-100 h-auto"
                        alt="apartment"
                    />
                </div>
                <div className="popularC_container col-12 h-100 col-md-5 col-lg-6 p-3 align-self-center">
                    <div className="searchC_icon"></div>
                    <h5 className="text-secondary">Discover</h5>
                    <h2 className="text-primary">Popular cities</h2>
                    <p className="text-light">
                        Here are the most popular places for rent{" "}
                    </p>
                    <ul className="list-group d-flex flex-row justify-content-center align-items-center flex-wrap">
                        {/* the top rated cities list */}
                        {list &&
                            list.map((c) => (
                                <div
                                    key={c.id}
                                    className="col-6 col-lg-4"
                                >
                                    <li className="list-group-item listItem_city border-0 text-light p-0">
                                        <i className="bi bi-geo-alt-fill text-secondary fs-5 me-1"></i>
                                        <Link
                                            to={"/properties-list/" + c.name}
                                            className="city_link text-decoration-none fw-medium"
                                        >
                                            {c.name}
                                        </Link>
                                    </li>
                                    <br />
                                </div>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PopularCitiesSection;
