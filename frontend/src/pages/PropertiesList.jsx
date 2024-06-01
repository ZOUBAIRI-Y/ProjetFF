import { useEffect, useState } from "react";
import Property from "../components/Property";
import client from "../custom-axios";
import { useParams } from "react-router-dom";

export default function PropertiesList() {
    const { term } = useParams();
    const [list, setList] = useState([]);
    const [terms, setTerms] = useState(term);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedCat, setSelectedCat] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedRooms, setSelectedRooms] = useState("");
    const [cities, setCities] = useState([]);
    const [cats, setCats] = useState([]);

    const [sortCriteria, setSortCriteria] = useState("");

    const handleSortChange = (e) => {
        const criteria = e.target.value;
        setSortCriteria(criteria);
        sortList(criteria);
    };
    const filterIcon = (
        <svg
            viewBox="0 0 16 16"
            class="_c43b94c5"
            fill="currentColor"
            width="1em"
            height="1em"
            aria-hidden="true"
        >
            <path d="M11 8a3 3 0 0 1 2.829 2H16v2l-2.171.001a3 3 0 0 1-5.658 0L0 12v-2h8.171A3 3 0 0 1 11 8Zm0 2a1 1 0 1 0 .993 1.117l.006-.1.001-.034a1 1 0 0 0-.883-.976L11 10ZM5 2a3 3 0 0 1 2.829 2H16v2l-8.171.001a3 3 0 0 1-5.658 0L0 6V4h2.171A3 3 0 0 1 5 2Zm0 2-.117.007A1 1 0 0 0 4 4.983l.001.034L4 5a1 1 0 1 0 1-1Z"></path>
        </svg>
    );

    const sortList = (criteria) => {
        let sortedList = [...list];
        switch (criteria) {
            case "mostRecent":
                sortedList.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                console.log(1);
                break;
            case "cheapest":
                sortedList.sort((a, b) => a.price - b.price);
                break;
            case "expensive":
                sortedList.sort((a, b) => b.price - a.price);
                break;
            // Add more cases for other sorting criteria if needed
            default:
                // Default sorting (no sorting)
                break;
        }
        setList(sortedList);
    };

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
        client
            .get("http://127.0.0.1:8000/api/categories")
            .then(({ data }) => {
                setCats(data.data);
                console.log(data);
            })

            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (
            typeof parseInt(term) === "number" &&
            parseInt(term) !== 0 &&
            !isNaN(term)
        ) {
            // console.log(parseInt(term));

            client
                .get("http://127.0.0.1:8000/api/categories/" + parseInt(term))
                .then(({ data }) => {
                    setSelectedCat(data.name);
                    // console.log(data.id);
                })

                .catch((err) => console.log(err));
            client
                .get(
                    "http://127.0.0.1:8000/api/properties?category[eq]" +
                        selectedCat
                )
                .then(({ data }) => {
                    setList(data.data);
                    console.log(data);
                })

                .catch((err) => console.log(err));
        }
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
            <form className="container mt-4 p-4 p-sm-0">
                <div className="row m-0 ">
                    <div className="col-12 p-0 pb-1 col-md-3 p-md-0 pe-md-1">
                        {typeof parseInt(term) === "number" &&
                        parseInt(term) !== 0 &&
                        !isNaN(term) ? (
                            <input
                                type="text"
                                placeholder="searche ..."
                                className="form-control custom_form_control"
                                onChange={(e) => setTerms(e.target.value)}
                            />
                        ) : (
                            <input
                                type="text"
                                placeholder="searche ..."
                                className="form-control custom_form_control"
                                value={terms === "all" ? "" : terms}
                                onChange={(e) => setTerms(e.target.value)}
                            />
                        )}
                    </div>
                    <div className="col-7 p-0 pb-1 pe-1 col-md-2 p-md-0 pe-md-1">
                        <select
                            className="form-select custom_form_select p-2"
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
                    <div className="col-5 p-0 pb-1 col-md-2 p-md-0 pe-md-1">
                        <select
                            className="form-select custom_form_select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setSelectedCat(e.target.value)}
                            value={selectedCat}
                        >
                            <option selected="">categories</option>
                            {cats &&
                                cats.map((c) => (
                                    <option key={c.id} value={c.name}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="col-5 p-0 pe-1 col-md-2 p-md-0 pe-md-1">
                        <select
                            className="form-select custom_form_select p-2"
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
                    
                    
                    <div className="col-5 p-0 pe-1 col-md-2 p-md-0 pe-md-1">
                        <select
                            className="form-select custom_form_select p-2"
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
                        className="btn btn-outline-success col-2 m-0 col-md-1 m-md-0 pe-md-1 ps-1 pe-1"
                    >
                        {filterIcon}
                    </button>
                </div>
            </form>{" "}
            <div className="total_sortProperties_bar container bg-altlight mt-2 p-4 p-sm-0">
                <p className="float-start text-primary fw-medium m-2">
                    {" "}
                    properties
                </p>

                <select
                    className="form-select form-select-sm ms-auto w-50 sort_select"
                    value={sortCriteria}
                    onChange={handleSortChange}
                >
                    <option value="">Sort By</option>
                    <option value="mostRecent">Most Recent</option>
                    <option value="cheapest">Cheapest</option>
                    <option value="expensive">Expensive</option>
                </select>
            </div>
            <div className="properties_list_section container mt-4 ps-5 pe-5 ps-sm-0 pe-sm-0">
                {/* here where the list of properties will be rendered */}
                <div className="property_container row m-0 p-0">
                    {list &&
                        list.map((p) => {
                            return (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3 p-0 ps-1 pe-1 pt-1 pb-1"
                                    key={p.id}
                                >
                                    <Property data={p} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
