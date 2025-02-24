import { useNavigate } from "react-router-dom";
import client from "../custom-axios";
import { useEffect, useState } from "react";
import Property from "../components/Property";

export default function Favourites() {
    const navigate = useNavigate();
    const [props, setProps] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("token") === null) navigate("/login");
        client
            .get(
                "http://localhost:8000/api/properties/" +
                    localStorage.getItem("id") +
                    "/liked"
            )
            .then(({ data }) => {
                setProps(data);
            })
            .catch((err) => console.log(err.response.data));
    }, []);
    const shapeIcon = (
        <svg viewBox="-217 378 41.8 37" className="shape_icon">
            <path d="M-175.1 415c-9.1 0-14.3-1.1-14.8-2.1-.1-.2.1-.5.9-.7 3.3-.5 5.8-1.7 7.4-3-14.5-1.4-35.3-11.7-35.3-14 0-.4.5-.6 1.6-.3 9 3.3 22.1.6 22.1-1.4 0-1.3-2.5-2.2-7.4-2.8-6.4-.2 7.2-7 21.1-7.1-1.9-1.2-4.5-2.2-7.5-2.8-1-.3-1.3-.7-1.1-1 .6-1 5.8-1.9 13.2-1.9-.2 2.7-.2 37.1-.2 37.1z"></path>
        </svg>
    );
    return (
        <div className="container mt-3">
            <div className="titleShape_container mb-2">
                {shapeIcon}
                <div className="bg-success title_container p-0">
                    <span className="fw-medium fs-5 text-white">
                        Favorites
                    </span>
                </div>
            </div>
            <div className="container p-2 mt-2 mb-2">
                <div className="row m-0">
                    {props.map((p) => (
                        <div key={p.id} className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 ">
                            <Property data={p.property} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
