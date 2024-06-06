import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import client from "../../custom-axios";

export default function UpdateListing() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState({});
    // {
    //     description: "",
    //     price: "",
    //     deposite: "",
    //     space: "",
    //     cityId: "",
    //     address: "",
    //     rentingType: "",
    //     readyDate: "",
    //     rooms: "",
    //     categoryId: "",
    //     userId: "",
    // }

    useEffect(() => {
        client
            .get(`http://localhost:8000/api/properties/${id}`)
            .then((response) => {
                setData(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching property data:", error);
            });

        // Fetch cities
        client
            .get("http://127.0.0.1:8000/api/cities")
            .then((response) => {
                setCities(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching cities:", error);
            });

        // Fetch categories
        client
            .get("http://127.0.0.1:8000/api/categories")
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, [id]);

    const handleForm = (e) => {
        e.preventDefault();
        client
            .patch(`http://localhost:8000/api/properties/${id}`, data)
            .then(() => {
                alert("updated successfully!");

                setTimeout(() => {
                    navigate("/lessor/manage-listings");
                }, 3000);
            })
            .catch((err) => console.log("Error updating listing:", err));
    };

    return (
        <>
            {Object.keys(data).length !== 0 && (
                <div className="d-flex flex-row justify-content-center">
                    <div className="container m-0 pt-5">
                        <h2 className="text-primary d-inline">
                            Update listing
                        </h2>

                        <form
                            className="listing_form mt-3 m-4"
                            onSubmit={handleForm}
                        >
                            <div className="primary_property_infos border rounded pt-1 p-3 bg-altlight">
                                <p className="text-dark fw-medium m-0 mt-2">
                                    <strong>Primary*</strong>
                                </p>
                                <select
                                    name="rental_type"
                                    value=""
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            rentingType: e.target.value,
                                        })
                                    }
                                    className="month_daily_inp form-select"
                                >
                                    <option value={data.rentingType}>
                                        {data.rentingType}
                                    </option>
                                    <option value="monthly">Monthly</option>
                                    <option value="daily">Daily</option>
                                </select>
                                {data.category && (
                                    <select
                                        name="category"
                                        value={data.category.id}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                categoryId: e.target.value,
                                            })
                                        }
                                        className="month_daily_inp form-select"
                                    >
                                        <option value={data.category.id}>
                                            {data.category.name}{" "}
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {data.city && (
                                    <select
                                        name="city"
                                        value=""
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                cityId: e.target.value,
                                            })
                                        }
                                        className="month_daily_inp form-select"
                                    >
                                        <option value={data.city.id}>
                                            {data.city.name}
                                        </option>
                                        {cities.map((city) => (
                                            <option
                                                key={city.id}
                                                value={city.id}
                                            >
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                <input
                                    type="text"
                                    name="property_address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            address: e.target.value,
                                        })
                                    }
                                    placeholder="Address"
                                    className="address_inp form-control"
                                />
                                <input
                                    type="text"
                                    name="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            price: e.target.value,
                                        })
                                    }
                                    placeholder="Price"
                                    className="form-control"
                                />
                                <input
                                    type="text"
                                    name="deposite"
                                    value={data.deposite}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            deposite: e.target.value,
                                        })
                                    }
                                    placeholder="Deposit"
                                    className="form-control"
                                />
                                <input
                                    type="text"
                                    name="space"
                                    value={data.space}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            space: e.target.value,
                                        })
                                    }
                                    placeholder="Space"
                                    className="form-control"
                                />
                                <input
                                    type="text"
                                    name="rooms"
                                    value={data.rooms}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            rooms: e.target.value,
                                        })
                                    }
                                    placeholder="Number of Rooms"
                                    className="form-control"
                                />
                                <input
                                    type="date"
                                    name="readyDate"
                                    value={data.readyDate}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            readyDate: e.target.value,
                                        })
                                    }
                                    className="when_ready_inp form-control"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-success add_listing_btn text-white float-end"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
