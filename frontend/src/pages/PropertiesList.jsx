import { useEffect, useState } from "react";
import Property from "../components/Property";
import FormPropertiesList from "../components/propertiesList/FormPropertiesList";
import client from "../custom-axios";
import { useParams } from "react-router-dom";

export default function PropertiesList() {
    const { term } = useParams();
    const [list, setList] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/properties?city[eq]" + term)
            .then(({ data }) => {
                setList(data.data);
            })

            .catch((err) => console.log(err));
    }, [term]);
    return (
        <>
            <FormPropertiesList />
            <div className="total_sortProperties_bar container bg-altlight mt-3">
                <p className="float-start text-primary fw-medium">
                    ? properties
                </p>

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
            <div className="properties_list container mt-4 border d-flex flex-row flex-wrap">
                {/* here where the list of properties will be rendered */}
                <div className="property_container d-flex flex-wrap">
                    {list && list.map((p) => <Property data={p} key={p.id} />)}
                </div>
            </div>
        </>
    );
}
