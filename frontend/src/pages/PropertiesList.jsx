import { useEffect, useState } from "react";
import Property from "../components/Property";
import client from "../custom-axios";
import { useParams } from "react-router-dom";

export default function PropertiesList() {
    const { term } = useParams();
    const [list, setList] = useState([]);
    const [terms, setTerms] = useState(term);
    const [ST_cit, setST_cit] = useState("");
    const [S_ctg, setS_ctg] = useState("");
    const [SPri, setSPri] = useState("");
    const [S_Roomses, setS_Roomses] = useState("");
    const [C_vill, setC_vill] = useState([]);
    const [cts, setcts] = useState([]);
    const [srtCrt, setsrtCrt] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const C_villResponse = await client.get(
                    "http://127.0.0.1:8000/api/cities"
                );
                setC_vill(C_villResponse.data.data);
                localStorage.setItem(
                    "cities",
                    JSON.stringify(C_villResponse.data.data)
                );
            } catch (error) {
                console.log(error);
            }
        };

        if (!localStorage.getItem("cities")) {
            fetchData();
        } else {
            setC_vill(JSON.parse(localStorage.getItem("cities")));
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await client.get(
                    "http://127.0.0.1:8000/api/categories"
                );
                setcts(categoriesResponse.data.data);
                localStorage.setItem(
                    "categories",
                    JSON.stringify(categoriesResponse.data.data)
                );
            } catch (error) {
                console.log(error);
            }
        };

        if (!localStorage.getItem("categories")) {
            fetchData();
        } else {
            setcts(JSON.parse(localStorage.getItem("categories")));
        }
    }, []);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const propertiesResponse = await client.get(
                    "http://127.0.0.1:8000/api/properties",
                    {
                        params: {
                            category_id: S_ctg,
                        },
                    }
                );
                setList(propertiesResponse.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (S_ctg) {
            fetchProperties();
        }
    }, [S_ctg]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                let url = "http://127.0.0.1:8000/api/properties";
                const params = {};

                if (ST_cit) params.city_id = ST_cit;
                if (SPri) params.price = { lte: SPri };
                if (S_Roomses) params.rooms = { lte: S_Roomses };

                const propertiesResponse = await client.get(url, { params });
                setList(propertiesResponse.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProperties();
    }, [ST_cit, SPri, S_Roomses]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const termResponse = await client.get(
                    "http://localhost:8000/api/properties",
                    {
                        params: {
                            term: terms,
                        },
                    }
                );

                if (termResponse.data.data.length === 0) {
                    const allPropertiesResponse = await client.get(
                        "http://127.0.0.1:8000/api/properties"
                    );
                    setList(allPropertiesResponse.data.data);
                } else {
                    setList(termResponse.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (terms && terms.length !== 0) {
            fetchProperties();
        }
    }, [terms]);

    const handleSortChange = (e) => {
        const criteria = e.target.value;
        setsrtCrt(criteria);

        let sortedList = [...list];
        switch (criteria) {
            case "mostRecent":
                sortedList.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                break;
            case "cheapest":
                sortedList.sort((a, b) => a.price - b.price);
                break;
            case "expensive":
                sortedList.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setList(sortedList);
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
                            onChange={(e) => setST_cit(e.target.value)}
                        >
                            <option selected="">cities</option>
                            {C_vill &&
                                C_vill.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="col-5 p-0 pb-1 col-md-2 p-md-0 pe-md-1">
                        <select
                            className="form-select custom_form_select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setS_ctg(e.target.value)}
                            value={S_ctg}
                        >
                            <option selected="">categories</option>
                            {cts &&
                                cts.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="col-5 p-0 pe-1 col-md-2 p-md-0 pe-md-1">
                        <select
                            className="form-select custom_form_select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setS_Roomses(e.target.value)}
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
                            onChange={(e) => setSPri(e.target.value)}
                        >
                            <option selected="">price</option>
                            <option value={100}>100 Dh</option>
                            <option value={200}>200</option>
                            <option value={300}>300</option>
                            <option value={500}>500</option>
                            <option value={1000}>More...</option>
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
                    value={srtCrt}
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
                <div className="pproperty_container row m-0 p-0">
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
