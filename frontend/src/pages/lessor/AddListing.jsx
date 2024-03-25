// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import { useEffect, useState } from "react";
import client from "../../custom-axios";

export default function AddListing() {
    const navigate = useNavigate();

    const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState([]);

    const [data, setData] = useState({
        description: "",
        price: "",
        deposite: "",
        space: "",
        cityId: 0,
        address: "",
        rentingType: "",
        readyDate: "",
        rooms: 2,
        categoryId: 0,
        features: "",
        userId: 0,
    });
    useEffect(() => {
        if (localStorage.getItem("token") === null) navigate("/login");
    }, []);

    useEffect(() => {
        if (localStorage.getItem("id"))
            setData({ ...data, userId: parseInt(localStorage.getItem("id")) });
        fetch("http://127.0.0.1:8000/api/cities")
            .then((d) => d.json())
            .then((res) => setCities(res.data));

        fetch("http://127.0.0.1:8000/api/categories")
            .then((d) => d.json())
            .then((res) => setCategories(res.data));
    }, []);

    const handleForm = (e) => {
        console.log(data);
        e.preventDefault();
        console.log(client.defaults.headers);
        client
            .post("http://localhost:8000/api/properties", data)
            .then((data) => {
                navigate("/lessor/add-listing-2/" + data.data.data.id);
            })
            .catch((err) => console.log(err.response.data));
    };

    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                <h1>Step 1:</h1>
                {/* <div className="next_previous_step"></div> */}
                <h2 className="text-primary d-inline">Add listing</h2>

                <form className="listing_form mt-3 m-4" onSubmit={handleForm}>
                    <button
                        type="submit"
                        className="btn btn-success add_listing_btn text-white float-end"
                    >
                        Add
                    </button>
                    <div className="primary_property_infos border rounded pt-1 p-3 bg-altlight">
                        <p className="text-dark fw-medium m-0 mt-2">
                            <strong>Primary*</strong>
                        </p>
                        <select
                            name="rental_type"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    rentingType: e.target.value,
                                })
                            }
                            className="month_daily_inp form-select"
                        >
                            <option value="">Monthly/daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="daily">Daily</option>
                        </select>
                        <select
                            name="category"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    categoryId: parseInt(e.target.value),
                                })
                            }
                            className="month_daily_inp form-select"
                        >
                            <option value="">Select Category</option>
                            {categories &&
                                categories.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>
                        <select
                            name="city"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    cityId: parseInt(e.target.value),
                                })
                            }
                            className="month_daily_inp form-select"
                        >
                            <option value="">Select City</option>
                            {cities &&
                                cities.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>

                        <input
                            type="text"
                            name="property_address"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    address: e.target.value,
                                })
                            }
                            placeholder="address"
                            className="address_inp form-control"
                        />
                        <div className="num_of_rooms pe-1">
                            <select
                                name="num_of_rooms"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        rooms: e.target.value,
                                    })
                                }
                                className="form-select"
                            >
                                <option value="">? of rooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">2</option>
                                <option value="...">...</option>
                            </select>
                        </div>
                        <div className="num_of_baths ps-1">
                            <select
                                name="num_of_baths"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        baths: e.target.value,
                                    })
                                }
                                className="form-select"
                            >
                                <option value="">? of baths</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="2">...</option>
                            </select>
                        </div>
                        <div className="row m-0">
                            <div className="col-sm-4 p-0 pe-1">
                                <input
                                    type="number"
                                    name="property_price"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            price: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                    placeholder="Price"
                                />
                            </div>
                            <div className="col-sm-4 p-0 ps-1 pe-1">
                                <input
                                    type="number"
                                    name="property_deposit"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            deposite: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                    placeholder="Deposit"
                                />
                            </div>
                            <div className="col-sm-4 p-0 ps-1">
                                <input
                                    type="number"
                                    name="property_space"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            space: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                    placeholder="Space"
                                />
                            </div>
                        </div>
                        <textarea
                            name="property_description"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    description: e.target.value,
                                })
                            }
                            className="description_inp form-control"
                        />

                        {/* <div className="photos_inp_container pe-1">
                            <input
                                type="file"
                                name="property_images"
                                onChange={(e) => handle_property_imgs(e)}
                                className="form-control"
                            />
                        </div> */}
                        {/* <div className="videos_inp_container ps-1">
                            <input
                                type="file"
                                name="property_videos"
                                onChange={(e) => handle_property_vds(e)}
                                className="form-control"
                            />
                        </div> */}
                        <input
                            type="date"
                            name="property_time_ready"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    readyDate: e.target.value,
                                })
                            }
                            className="when_ready_inp form-control"
                        />
                    </div>
                    <div className="additional_property_features border rounded pt-1 p-3 bg-altlight mt-2">
                        <p className="text-dark fw-medium m-0 mt-2">
                            <strong>Additional features</strong>
                        </p>
                        <fieldset className="additional_features_area border rounded d-flex flex-row flex-wrap justify-content-between p-2 mt-2">
                            <div className="roof_feature_container m-0 form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="roof"
                                    name="roof_feat"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            features: e.target.value,
                                        })
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="roof_feat"
                                >
                                    roof
                                </label>
                            </div>
                            <div className="garage_feature_container m-0 form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="garage"
                                    name="garage_feat"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            features: e.target.value,
                                        })
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="garage_feat"
                                >
                                    Garage
                                </label>
                            </div>
                            <div className="internet_feature_container m-0 form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="internet"
                                    name="internet_feat"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            features: e.target.value,
                                        })
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="internet_feat"
                                >
                                    Internet
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
}
