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

    return (
        <div className="d-flex  flex-wrap">
            {props.map((p) => (
                <Property key={p.id} data={p.property} />
            ))}
            <p>pagination ici!</p>
        </div>
    );
}
