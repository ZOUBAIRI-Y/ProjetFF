// import luffy from "../../assets/luffy.jpg";
import { useEffect, useState } from "react";
import client from "../../custom-axios";
import { Link } from "react-router-dom";
import topL_main from "../../assets/topL_section/topL_main.png";

function TopLessorsSection() {
    const [list, setList] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("lessors") === null) {
            client
                .get("http://127.0.0.1:8000/api/lessors")
                .then(({ data }) => {
                    setList(data.data);
                    localStorage.setItem("lessors", JSON.stringify(data.data));
                    console.log(data);
                })

                .catch((err) => console.log(err));
        } else {
            setList(JSON.parse(localStorage.getItem("lessors")));
        }
    }, []);

    return (
        <div className="container">
            <div className="top_lessors_section row m-0 p-0">
                <div className="topL_container col-12 h-100 col-md-7 p-3 align-self-center">
                    <div className="searchL_icon"></div>
                    <h5 className="text-secondary">Discover</h5>
                    <h2 className="text-primary">Top rated lessors</h2>
                    <p className="text-light">
                        Here are our top rated lessors{" "}
                    </p>
                    <ul className="list-group topL_list d-flex flex-row flex-wrap">
                        {/* the top rated cities list */}
                        {list &&
                            list.map((l) => (
                                <li
                                    key={l.id}
                                    className="list-group-item listItem_lessor border-0 p-0 pt-2 pb-2"
                                >
                                    <div className="row m-0 p-0 ps-lg-3">
                                        <div className="col-sm-3 lessor_side_img_container p-0">
                                            <img
                                                src={
                                                    "http://127.0.0.1:8000" +
                                                    l.avatar
                                                }
                                                alt="profile picture"
                                            />
                                        </div>
                                        {/* </div> */}
                                        <div className="col align-self-center p-0 ps-2">
                                            <Link
                                                to={
                                                    "/properties-list/" +
                                                    l.firstname +
                                                    " " +
                                                    l.firstname
                                                }
                                                className="text-decoration-none lessorname_link fw-medium "
                                            >
                                                {l.firstname} {l.firstname}
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="topLimg_container col-12 h-100 col-md-5 p-0 align-self-center">
                    <img
                        src={topL_main}
                        className="img-fluid w-100 h-auto"
                        alt="top rated lessor concept"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopLessorsSection;
