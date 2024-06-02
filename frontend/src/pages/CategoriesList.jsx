// import { useEffect, useState } from "react";
// import Property from "../components/Property";
import { useEffect, useState } from "react";
import client from "../custom-axios";
import { Link, useNavigate } from "react-router-dom";

export default function CategoriesList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("categories") === null) {
            client
                .get("http://127.0.0.1:8000/api/categories")
                .then(({ data }) => {
                    setList(data.data);
                    localStorage.setItem(
                        "categories",
                        JSON.stringify(data.data)
                    );
                    console.log(data);
                })
                .catch((err) => console.log(err));
        } else {
            setList(JSON.parse(localStorage.getItem("categories")));
        }
    }, []);
    const navigate = useNavigate();
    const handleLinkClick = (id) => {
        navigate(`/properties-list/${id}`);
    };
    const shapeIcon = (
        <svg viewBox="-217 378 41.8 37" className="shape_icon">
            <path d="M-175.1 415c-9.1 0-14.3-1.1-14.8-2.1-.1-.2.1-.5.9-.7 3.3-.5 5.8-1.7 7.4-3-14.5-1.4-35.3-11.7-35.3-14 0-.4.5-.6 1.6-.3 9 3.3 22.1.6 22.1-1.4 0-1.3-2.5-2.2-7.4-2.8-6.4-.2 7.2-7 21.1-7.1-1.9-1.2-4.5-2.2-7.5-2.8-1-.3-1.3-.7-1.1-1 .6-1 5.8-1.9 13.2-1.9-.2 2.7-.2 37.1-.2 37.1z"></path>
        </svg>
    );
    return (
        <div className="container mt-5 mb-5">
            <div className="titleShape_container mb-2">
                {shapeIcon}
                <div className="bg-success title_container p-0">
                    <span className="fw-medium fs-5 text-white">Categories</span>
                </div>
            </div>
            <div className="row m-0 categories_list_group">
                {list &&
                    list.map((cat) => (
                        <div
                            className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-0 p-2"
                            onClick={() => handleLinkClick(cat.id)}
                            key={cat.id}
                        >
                            <div className="categories_list_group_item bg-altlight p-2 h-100">
                                <img
                                    src={"http://127.0.0.1:8000" + cat.image}
                                    key={Date.now}
                                />
                                <div className="w-100 p-0 p-2 name_description_container">
                                    <h4 className="text-center text-primary fs-5 fw-bold">
                                        {cat.name}
                                    </h4>
                                    <p className="m-0">
                                        <span className="fw-medium">
                                            description:{" "}
                                        </span>
                                        {cat.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
