import LessorSidebar from "../../layouts/LessorSidebar";
import { useEffect, useState } from "react";
import client from "../../custom-axios";
import { useNavigate } from "react-router-dom";
import { FaComment, FaWalking } from "react-icons/fa";
import { MdReviews, MdStarRate } from "react-icons/md";
import { TiWarning } from "react-icons/ti";

export default function HomeLessor() {
    const navigate = useNavigate();
    const [userfo, setUserInfo] = useState({});
    useEffect(() => {
        if (localStorage.getItem("id") === null) navigate("/login");
        if (localStorage.getItem("user") === null)
            client
                .get(
                    "http://localhost:8000/api/users/" +
                        localStorage.getItem("id")
                )
                .then(({ data }) => {
                    setUserInfo(data.data);
                    console.log(data.data);
                })

                .catch((err) => console.log(err.response.data));
        else setUserInfo(JSON.parse(localStorage.getItem("user")));
    }, []);
    return (
        <div className="d-flex flex-row justify-content-center">
            <div className="container m-0 p-3">
                <div className="row m-0">
                    <div className="col-6 col-lg-3 p-1">
                        <div className="border border-danger rounded w-100 p-2 dashboar_list_item">
                            <div className="dashboard_icon_container fs-4 text-danger rounded ps-2">
                                <FaWalking />
                            </div>
                            <p className="m-0 fw-bold text-danger">
                                Tour requests
                            </p>
                            <p className="m-0 fw-medium p-2 text-light">
                                total: 12
                            </p>
                            <hr className="mt-2 mb-0 text-danger" />
                            <div>
                                <span className="fs-3 warning_icon_container">
                                    <TiWarning />
                                </span>
                                <span className=""> 2 requests today</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 p-1">
                        <div className="border border-success rounded w-100 p-2 dashboar_list_item">
                            <div className="dashboard_icon_container fs-4 text-success rounded ps-2">
                                <FaComment />
                            </div>
                            <p className="m-0 fw-bold text-success">comments</p>
                            <p className="m-0 fw-medium p-2 text-light">
                                total: 22
                            </p>
                            <hr className="mt-2 mb-0 text-success" />
                            <div>
                                <span className="fs-3 warning_icon_container">
                                    <TiWarning />
                                </span>
                                <span className=""> 3 comments today</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 p-1">
                        <div className="border border-primary rounded w-100 p-2 dashboar_list_item">
                            <div className="dashboard_icon_container fs-4 text-primary rounded ps-2">
                                <MdReviews />
                            </div>
                            <p className="m-0 fw-bold text-primary">reviews</p>
                            <p className="m-0 fw-medium p-2 text-light">
                                total: 7
                            </p>
                            <hr className="mt-2 mb-0 text-primary" />
                            <div>
                                <span className="fs-3 warning_icon_container">
                                    <TiWarning />
                                </span>
                                <span className=""> 0 reviews today</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 p-1">
                        <div className="border border-secondary rounded w-100 p-2 dashboar_list_item">
                            <div className="dashboard_icon_container fs-4 text-secondary rounded ps-2">
                                <MdStarRate />
                            </div>
                            <p className="m-0 fw-bold text-secondary">
                                ratings
                            </p>
                            <p className="m-0 fw-medium p-2 text-light">
                                total: 7
                            </p>
                            <hr className="mt-2 mb-0 text-secondary" />
                            <div>
                                <span className="fs-3 warning_icon_container">
                                    <TiWarning />
                                </span>
                                <span className=""> 2 ratings today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
