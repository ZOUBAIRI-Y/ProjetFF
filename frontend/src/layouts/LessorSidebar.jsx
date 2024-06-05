import { Link, useNavigate } from "react-router-dom";
import profilePic from "../assets/luffy.jpg";
import { useEffect, useState } from "react";
import { getUser } from "../custom-axios";
import {
    FaHome,
    FaList,
    FaPlus,
    FaUser,
    FaArrowRight,
    FaArrowLeft,
} from "react-icons/fa";
function LessorSidebar() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        if (localStorage.getItem("id") === null) navigate("/login");
        const u = getUser();
        setUserInfo(u);
        console.log(u);
    }, []);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className={`lessor_side_bar ${collapsed ? "collapsed" : ""}`}>
            <button className="toggle-button align-self-center" onClick={toggleSidebar}>
                {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
            </button>
            <div className="lessor_infos">
                <div className="lessor_side_img_container">
                    <img
                        src={
                            userInfo.avatar
                                ? "http://127.0.0.1:8000" + userInfo.avatar
                                : profilePic
                        }
                        alt="profilePic"
                    />
                </div>
                {!collapsed && (
                    <span className="lessor_name_sideBar">
                        Mr. {userInfo.name}
                    </span>
                )}
            </div>
            <ul className="sidBar_nav">
                <li className="nav-item text-primary fw-medium ">
                    <Link to={"/lessor/home"} className="nav-link">
                        <FaHome />
                        {!collapsed && <span>Home</span>}
                    </Link>
                </li>
                <li className="nav-item text-primary fw-medium ">
                    <Link to={"/lessor/manage-listings"} className="nav-link">
                        <FaList />
                        {!collapsed && <span>My listings</span>}
                    </Link>
                </li>
                <li className="nav-item text-primary fw-medium ">
                    <Link to={"/lessor/add-listing"} className="nav-link">
                        <FaPlus />
                        {!collapsed && <span>Add listing</span>}
                    </Link>
                </li>
                <li className="nav-item text-primary fw-medium">
                    <Link to={"/lessor/my-account"} className="nav-link">
                        <FaUser />
                        {!collapsed && <span>My account</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default LessorSidebar;
