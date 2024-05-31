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

    return (
        <>
            <form className="container mt-4">
                <div className="row">
                    <div className="col-sm-4 ps-0 pe-1">
                        {typeof parseInt(term) === "number" &&
                        parseInt(term) !== 0 &&
                        !isNaN(term) ? (
                            <input
                                type="text"
                                placeholder="searche ..."
                                className="form-control p-2 "
                                onChange={(e) => setTerms(e.target.value)}
                            />
                        ) : (
                            <input
                                type="text"
                                placeholder="searche ..."
                                className="form-control p-2 "
                                value={terms}
                                onChange={(e) => setTerms(e.target.value)}
                            />
                        )}
                    </div>
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
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
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
                            aria-label="Default select example"
                            onChange={(e) => setST_cit(e.target.value)}
                        >
                            <option selected="">Villes</option>
                            {C_vill &&
                                C_vill.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
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
                    <div className="col-sm p-0 pe-1">
                        <select
                            className="form-select p-2"
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
            <div className="properties_list container mt-4 border d-flex flex-row flex-wrap">
                {/* here where the list of properties will be rendered */}
                <div className="property_container d-flex flex-wrap">
                    {list && list.map((p) => <Property data={p} key={p.id} />)}
                </div>
            </div>
        </>
    );
}
