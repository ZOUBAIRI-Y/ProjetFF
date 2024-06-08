import { Link, NavLink, useNavigate } from "react-router-dom";
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
    const handleNavClick = (path) => {
        setCollapsed(true);
        navigate(path);
    };
    return (
        <>
            <div className={`lessor_side_bar ${collapsed ? "collapsed" : ""}`}>
                <button
                    className="toggle-button"
                    onClick={toggleSidebar}
                >
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
                            {userInfo.name}
                        </span>
                    )}
                </div>
                <ul className="sidBar_nav">
                    <li className="nav-item text-primary fw-medium ">
                        <Link to={"/lessor/home"} className="nav-link sidebar_navLink text-secondary">
                            <FaHome />
                            {!collapsed && <span className="text-primary">Home</span>}
                        </Link>
                    </li>
                    <li className="nav-item text-primary fw-medium ">
                        <Link
                            to={"/lessor/manage-listings"}
                            className="nav-link sidebar_navLink text-secondary"
                        >
                            <FaList />
                            {!collapsed && <span className="text-primary">My listings</span>}
                        </Link>
                    </li>
                    <li className="nav-item text-primary fw-medium ">
                        <Link to={"/lessor/add-listing"} className="nav-link sidebar_navLink text-secondary">
                            <FaPlus />
                            {!collapsed && <span className="text-primary">Add listing</span>}
                        </Link>
                    </li>
                    <li className="nav-item text-primary fw-medium">
                        <Link to={"/lessor/my-account"} className="nav-link sidebar_navLink text-secondary">
                            <FaUser />
                            {!collapsed && <span className="text-primary">My account</span>}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottom_navbar">
                <NavLink to="/lessor/home" className="nav-icon d-flex justify-content-center align-items-center " activeclassname="active">
                    <FaHome />
                </NavLink>
                <NavLink to="/lessor/manage-listings" className="nav-icon d-flex justify-content-center align-items-center " activeclassname="active">
                    <FaList />
                </NavLink>
                <NavLink to="/lessor/add-listing" className="nav-icon d-flex justify-content-center align-items-center" activeclassname="active">
                    <FaPlus />
                </NavLink>
                <NavLink to="/lessor/my-account" className="nav-icon d-flex justify-content-center align-items-center " activeclassname="active">
                    <FaUser />
                </NavLink>
            </div>
        </>
    );
}

export default LessorSidebar;
