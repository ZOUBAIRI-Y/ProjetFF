import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";

export default function AddListing() {
    return (
        <div className="add_listing_main">
            <div className="next_previous_step"></div>
            <form className="listing_form p-3">
                <p className="text-primary fw-medium m-0">Primary*</p>
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
                <select
                    name="rooms_num_inp"
                    className="rooms_num_inp form-select"
                >
                    <option value="">? of rooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="2">2</option>
                    <option value="2">...</option>
                </select>
                <select
                    name="baths_num_inp"
                    className="baths_num_inp form-select"
                >
                    <option value="">? of baths</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">...</option>
                </select>
                <input
                    type="number"
                    name="price_inp"
                    className="price_inp form-control"
                    placeholder="Price"
                />
                <input
                    type="number"
                    name="deposit_inp"
                    className="deposit_inp form-control"
                    placeholder="Deposit"
                />
                <input
                    type="number"
                    name="space_inp"
                    className="space_inp form-control"
                    placeholder="Space"
                />
                <textarea className="description_inp form-control" />
                <input
                    type="number"
                    name="phone_inp"
                    className="phone_inp form-control"
                    placeholder="Phone"
                />
                <input
                    type="file"
                    name="photos_inp"
                    className="photos_inp form-control"
                />
                <input
                    type="file"
                    name="video_inp"
                    className="video_inp form-control"
                />
                <input
                    type="date"
                    name="when_ready_inp"
                    className="when_ready_inp form-control"
                />
                <p className="text-primary fw-medium mt-3">
                    Additional features
                </p>
                <fieldset className="additional_features_area border border-light rounded p-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="roof"
                            name="roof_feat"
                        />
                        <label className="form-check-label" htmlFor="roof_feat">
                            roof
                        </label>
                    </div>
                    <div className="form-check">
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
                    <div className="form-check">
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
            </form>
        </div>
    );
}
