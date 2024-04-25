import LessorSidebar from "../../layouts/LessorSidebar";
import { useEffect, useState } from "react";
import client from "../../custom-axios";
import { useNavigate } from "react-router-dom";

export default function HomeLessor() {
    const navigate = useNavigate();
    const [userfo, setUserInfo] = useState({});
    useEffect(() => {
        if (localStorage.getItem("id") === null) navigate("/login");
        client
            .get(
                "http://localhost:8000/api/users/" + localStorage.getItem("id")
            )
            .then(({ data }) => {
                setUserInfo(data.data);
                console.log(data.data);
            })

            .catch((err) => console.log(err.response.data));
    }, []);
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar data={userfo} />
            <div className="container m-0 p-3">
                {userfo && (
                    <div className="row">
                        <div className="col">
                            <h5>User Info</h5>
                            <p>First Name: {userfo.firstname}</p>
                            <p>Last Name: {userfo.lastname}</p>
                            <p>Email: {userfo.email}</p>
                            <p>Address: {userfo.address}</p>
                            <p>Phone 1: {userfo.phone1}</p>
                            <p>Phone 2: {userfo.phone2}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
