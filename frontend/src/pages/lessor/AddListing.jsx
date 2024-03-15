import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import { useState } from "react";

export default function AddListing() {
    const [property_inputs, setPropertyinfos] = useState({});
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                {/* <div className="next_previous_step"></div> */}
                <h2 className="text-primary d-inline">Add listing</h2>
                <form className="listing_form mt-3">
                    <div className="primary_property_infos border rounded pt-1 p-3 bg-altlight">
                        <p className="text-dark fw-medium m-0 mt-2">
                            <strong>Primary*</strong>
                        </p>
                        <select
                            name="month_daily_inp"
                            className="month_daily_inp form-select"
                        >
                            <option value="">Monthly/daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="daily">Daily</option>
                        </select>
                        <select
                            name="housing_category_inp"
                            className="housing_category_inp form-select"
                        >
                            <option value="apartment">Apartment</option>
                            <option value="studio">Studio</option>
                            <option value="front-beach">Front-beach</option>
                        </select>
                        <input
                            type="text"
                            placeholder="address"
                            className="address_inp form-control"
                        />
                        <div className="num_of_rooms pe-1">
                            <select
                                name="rooms_num_inp"
                                className="form-select"
                            >
                                <option value="">? of rooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="2">3</option>
                                <option value="2">2</option>
                                <option value="2">...</option>
                            </select>
                        </div>
                        <div className="num_of_baths ps-1">
                            <select
                                name="baths_num_inp"
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
                                    name="price_inp"
                                    className="form-control"
                                    placeholder="Price"
                                />
                            </div>
                            <div className="col-sm-4 p-0 ps-1 pe-1">
                                <input
                                    type="number"
                                    name="deposit_inp"
                                    className="form-control"
                                    placeholder="Deposit"
                                />
                            </div>
                            <div className="col-sm-4 p-0 ps-1">
                                <input
                                    type="number"
                                    name="space_inp"
                                    className="form-control"
                                    placeholder="Space"
                                />
                            </div>
                        </div>
                        <textarea className="description_inp form-control" />
                        <input
                            type="number"
                            name="phone_inp"
                            className="phone_inp form-control"
                            placeholder="Phone"
                        />
                        <div className="photos_inp_container pe-1">
                            <input
                                type="file"
                                name="photos_inp"
                                className="form-control"
                            />
                        </div>
                        <div className="videos_inp_container ps-1">
                            <input
                                type="file"
                                name="video_inp"
                                className="form-control"
                            />
                        </div>
                        <input
                            type="date"
                            name="when_ready_inp"
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
