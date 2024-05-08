import { useEffect, useState } from "react";
import Property from "../components/Property";
import client from "../custom-axios";
import { useParams } from "react-router-dom";

export default function PropertiesList() {
    const { term } = useParams();
    const [list, setList] = useState([]);
    const [terms, setTerms] = useState(term);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedRooms, setSelectedRooms] = useState("");

    const [cities, setCities] = useState([]);
    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/cities")
            .then(({ data }) => {
                setCities(data.data);
                console.log(data);
            })

            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (term === "all" || !terms) {
            client
                .get("http://127.0.0.1:8000/api/properties")
                .then(({ data }) => {
                    console.log(data);
                    setList(data.data);
                })

                .catch((err) => console.log(err));
        } else {
            client
                .get("http://127.0.0.1:8000/api/properties/results/" + terms)
                .then(({ data }) => {
                    console.log(data);
                    setList(data.data);
                })

                .catch((err) => console.log(err));
        }
    }, [terms]);

    useEffect(() => {
        client
            .get(
                `http://127.0.0.1:8000/api/properties?rooms[gte]${selectedRooms}&price[lte]${selectedPrice}&city[eq]${selectedCity}`
            )
            .then(({ data }) => {
                setList(data.data);
            })
            .catch((err) => console.log(err));
    }, [selectedCity, selectedPrice, selectedRooms]);

    return (
        <>
            <form className="container mt-4">
                <div className="row">
                    <div className="col-sm-4 ps-0 pe-1">
                        <input
                            type="text"
                            placeholder="searche ..."
                            className="form-control p-2 "
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                        />
                    </div>
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setSelectedRooms(e.target.value)}
                        >
                            <option selected="">rooms</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                            <option value={"more"}>More...</option>
                        </select>
                    </div>
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option selected="">cities</option>
                            {cities &&
                                cities.map((c) => (
                                    <option key={c.id} value={c.name}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setSelectedPrice(e.target.value)}
                        >
                            <option selected="">price</option>
                            <option value={1000}>100</option>
                            <option value={2000}>200</option>
                            <option value={3000}>300</option>
                            <option value={4000}>More...</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="btn btn-outline-success col-sm-2"
                    >
                        Advanced
                    </button>
                </div>
            </form>{" "}
            <div className="total_sortProperties_bar container bg-altlight mt-3">
                <p className="float-start text-primary fw-medium m-2">
                    {" "}
                    properties
                </p>

                <select
                    className="form-select form-select-sm ms-auto sort_select"
                    aria-label="Default select example"
                >
                    <option selected value="">
                        sort by:
                    </option>
                    <option value="Most recent">Most recent</option>
                    <option value="Cheapest">Cheapest</option>
                    <option value="Expensive">Expensive</option>
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
