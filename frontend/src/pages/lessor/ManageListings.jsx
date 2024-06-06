import { Link, useNavigate } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import Property_manage from "../../components/lessor/Property_manage";
import { useEffect, useState } from "react";
import client from "../../custom-axios";

export default function ManageListings() {
    const navigate = useNavigate();

    const [propertiesList, setPropertiesList] = useState({});
    console.log(propertiesList);
    const handleDelete = (propertyId) => {
        client
            .delete(`http://localhost:8000/api/properties/${propertyId}`)
            .then((data) => {
                setPropertiesList([
                    ...propertiesList.filter((p) => p.id !== propertyId),
                ]);
            })
            .catch((err) => console.log(err.response.data));
    };
    useEffect(() => {
        if (localStorage.getItem("token") === null) navigate("/login");
        client
            .get(
                "http://localhost:8000/api/users/" + localStorage.getItem("id")
            )
            .then(({ data }) => {
                const properties = Array.isArray(data.data.properties)
                    ? data.data.properties
                    : [data.data.properties];
                setPropertiesList(properties);
                console.log(properties);
            })

            .catch((err) => console.log(err.response.data));
    }, []);
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                <h2 className="text-primary d-inline">My listings</h2>
                <Link to={"/lessor/add-listing"}>
                    <button className="btn btn-success add_listing_btn_manage text-white float-end">
                        Add listing
                    </button>
                </Link>
                <ul className="list-group mt-3 p-3 border bg-altlight ">
                    {propertiesList && propertiesList.length > 0 ? (
                        propertiesList.map((p) => (
                            <li
                                key={p.id}
                                className="list-group-item mb-2 p-2 border rounded"
                            >
                                <Property_manage
                                    data={p}
                                    onDelete={(id) => handleDelete(id)}
                                />
                            </li>
                        ))
                    ) : (
                        <p>No propeties</p>
                    )}
                </ul>
                <nav className="">
                    <ul className="pagination mt-4 justify-content-center">
                        <li className="page-item disabled">
                            <a
                                className="page-link"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
