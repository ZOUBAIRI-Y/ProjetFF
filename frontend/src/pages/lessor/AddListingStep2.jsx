import { useState } from "react";
import client from "../../custom-axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddListingStep2 = () => {
    const { id } = useParams();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        // Get the selected files from the event
        const files = event.target.files;
        // Create a copy of the existing selected files
        const updatedSelectedFiles = [...selectedFiles];
        // Iterate over each selected file and add it to the copy
        for (let i = 0; i < files.length; i++) {
            updatedSelectedFiles.push(files[i]);
        }
        // Update the selected files state with the copy
        setSelectedFiles(updatedSelectedFiles);
    };

    const handleUpload = () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append("images[]", selectedFiles[i]);
        }
        client
            .post(
                `http://127.0.0.1:8000/api/properties/${id}/images`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((response) => {
                if (response.status == 200) {
                    navigate("/lessor/manage-listings");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="p-4">
            <h1>Step: 2</h1>
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default AddListingStep2;
