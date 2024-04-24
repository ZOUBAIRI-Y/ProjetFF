import { useEffect, useState } from "react";
import client from "../custom-axios";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
    const { id } = useParams();

    const [prop, setProp] = useState({});

    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/properties/" + id)
            .then(({ data }) => {
                console.log(data.data);
                setProp(data.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
            <div className="property-details p-5">
                <h1 className="mb-4">Property Details: </h1>
                <div className="property-info">
                    <h2>Description:</h2>
                    <p>{prop.description}</p>
                    <h2>Price:</h2>
                    <p>${prop.price}</p>
                    <h2>Deposit:</h2>
                    <p>${prop.deposite}</p>
                    <h2>Space:</h2>
                    <p>{prop.space} sq ft</p>
                    <h2>Address:</h2>
                    <p>{prop.address}</p>
                    <h2>Baths:</h2>
                    <p>{prop.baths}</p>
                    <h2>Category:</h2>
                    <p>{prop.category ? prop.category.name : ""}</p>
                    <h2>City:</h2>
                    <p>{prop.city ? prop.city.name : ""}</p>
                    <h2>Created At:</h2>
                    <p>
                        {prop.createdAt
                            ? new Date(prop.createdAt).toLocaleDateString()
                            : ""}
                    </p>
                    <h2>Ready Date:</h2>
                    <p>
                        {prop.readyDate
                            ? new Date(prop.readyDate).toLocaleDateString()
                            : ""}
                    </p>
                    <h2>Renting Type:</h2>
                    <p>{prop.rentingType}</p>
                </div>
            </div>
        </>
    );
}
