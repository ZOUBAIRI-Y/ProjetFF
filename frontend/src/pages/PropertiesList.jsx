import Property from "../components/Property";
import FormPropertiesList from "../components/propertiesList/FormPropertiesList";
import Header from "../layouts/Header";

export default function PropertiesList() {
    return (
        <>
            <Header />
            <FormPropertiesList />
            <div className="total_sortProperties_bar container bg-altlight mt-3">
                <p className="float-start text-primary fw-medium">? properties</p>

                <select
                    className="form-select form-select-sm ms-auto sort_select"
                    aria-label="Default select example"
                >
                    <option selected="">sort by:</option>
                    <option value={"Most recent"}>Most recent</option>
                    <option value={"Cheapest"}>Cheapest</option>
                    <option value={"Expensive"}>Expensive</option>
                </select>
            </div>
            <div className="properties_list container mt-4 border">
                {/* here where the list of properties will be rendered */}
                <Property />
            </div>
        </>
    );
}
