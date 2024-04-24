import ApartmentImg from "../../assets/lessor_rating.jpg";
// import luffy from "../../assets/luffy.jpg";
import { useEffect, useState } from "react";
import client from "../../custom-axios";

function TopLessorsSection() {
    const [list, setList] = useState([]);
    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/lessors")
            .then(({ data }) => {
                setList(data.data);
                console.log(data);
            })

            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="top_lessors_section row">
            <div className="topLessors_list_sec col-sm p-3">
                <h5 className="text-secondary">Discover</h5>
                <h2 className="text-primary">Top rated lessors</h2>
                <p className="text-light">Here are our top rated lessors </p>
                <ul className="list-group topLessors_list d-flex flex-row flex-wrap">
                    {/* the top rated cities list */}
                    {list &&
                        list.map((l) => (
                            <li key={l.id} className="list-group-item border-0">
                                <div className="row">
                                    {/* <div className="lessor_image_container border border-light col-2"> */}
                                    <img
                                        src={l.avatar}
                                        height={100}
                                        // className="rounded-circle"
                                    />
                                    {/* </div> */}
                                    <div className="col">
                                        <span>
                                            {l.firstname} {l.firstname}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="popularCitiesSec_img col-sm align-self-center">
                <img src={ApartmentImg} className="img-fluid" alt="apartment" />
            </div>
        </div>
    );
}

export default TopLessorsSection;
