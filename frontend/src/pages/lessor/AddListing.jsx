import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import { useState } from "react";

export default function AddListing() {
    const [property_inputs, setPropertyinfos] = useState({
        
    })
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 p-3">

            </div>
        </div>
    )
}
