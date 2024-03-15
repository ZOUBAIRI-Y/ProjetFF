import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import { useEffect, useState } from "react";

export default function AddListing() {
    const [property_images, setProperty_imgs] = useState([]);
    const [property_videos, setProperty_videos] = useState([]);
    const [additional_features, setFeatures] = useState([]);
    const [property_inputs, setPropertyinfos] = useState({
        rental_type: "",
        housing_category: "",
        property_address: "",
        num_of_rooms: "",
        num_of_baths: "",
        property_price: 0,
        property_deposit: 0,
        property_space: 0,
        property_description: "",
        lessor_phone_prop: "",
        property_images: property_images,
        property_videos: property_videos,
        property_time_ready: "",
        additional_features: additional_features,
    });
    const handle_propertyInp_changes = (e) => {
        setPropertyinfos({
            ...property_inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handle_property_imgs = (e) => {
        setProperty_imgs([...property_images, e.target.value]);
    }
    const handle_property_vds = (e) => {
        setProperty_videos([...property_videos, e.target.value]);
    }
    const handle_additional_fts = (e) => {
        setFeatures([...additional_features, e.target.value]);
    }
    useEffect(() => {
        setPropertyinfos({
            ...property_inputs,
            property_images: property_images,
            property_videos: property_videos,
            additional_features: additional_features
        })
    }, [property_images, property_videos, additional_features])
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                {/* <div className="next_previous_step"></div> */}
                <h2 className="text-primary d-inline">Add listing</h2>
                <button className="btn btn-success add_listing_btn text-white float-end" onClick={()=> {
                    console.log(property_inputs);
                }}>
                    Add
                </button>
                {/* <h2 className="text-primary d-inline">Add listing</h2> */}
                <form className="listing_form mt-3">
                    <div className="primary_property_infos border rounded pt-1 p-3 bg-altlight">
                        <p className="text-dark fw-medium m-0 mt-2">
                            <strong>Primary*</strong>
                        </p>
                        <select
                            name="rental_type"
                            onChange={(e) =>
                                handle_propertyInp_changes(e)
                            }
                            className="month_daily_inp form-select"
                        >
                            <option value="">Monthly/daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="daily">Daily</option>
                        </select>
                        <select
                            name="housing_category"
                            onChange={(e) =>
                                handle_propertyInp_changes(e)
                            }
                            className="housing_category_inp form-select"
                        >
                            <option value="apartment">Apartment</option>
                            <option value="studio">Studio</option>
                            <option value="front-beach">Front-beach</option>
                        </select>
                        <input
                            type="text"
                            name="property_address"
                            onChange={(e) =>
                                handle_propertyInp_changes(e)
                            }
                            placeholder="address"
                            className="address_inp form-control"
                        />
                        <div className="num_of_rooms pe-1">
                            <select
                                name="num_of_rooms"
                                onChange={(e) =>
                                    handle_propertyInp_changes(e)
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
                                    handle_propertyInp_changes(e)
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
                                        handle_propertyInp_changes(e)
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
                                        handle_propertyInp_changes(e)
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
                                        handle_propertyInp_changes(e)
                                    }
                                    className="form-control"
                                    placeholder="Space"
                                />
                            </div>
                        </div>
                        <textarea
                            name="property_description"
                            onChange={(e) =>
                                handle_propertyInp_changes(e)
                            }
                            className="description_inp form-control"
                        />
                        <input
                            type="number"
                            name="lessor_phone_prop"
                            onChange={(e) =>
                                handle_propertyInp_changes(e)
                            }
                            className="phone_inp form-control"
                            placeholder="Phone"
                        />
                        <div className="photos_inp_container pe-1">
                            <input
                                type="file"
                                name="property_images"
                                onChange={(e) =>
                                    handle_property_imgs(e)
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="videos_inp_container ps-1">
                            <input
                                type="file"
                                name="property_videos"
                                onChange={(e) =>
                                    handle_property_vds(e)
                                }
                                className="form-control"
                            />
                        </div>
                        <input
                            type="date"
                            name="property_time_ready"
                            onChange={(e) =>
                                handle_propertyInp_changes(e)
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
                                        handle_additional_fts(e)
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
                                        handle_additional_fts(e)
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
                                        handle_additional_fts(e)
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
