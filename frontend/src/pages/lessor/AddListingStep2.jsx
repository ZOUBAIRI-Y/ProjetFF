import { useState, useRef } from "react";
import client from "../../custom-axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";

const AddListingStep2 = () => {
    const { id } = useParams();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});
    const [isUploading, setIsUploading] = useState(false);
    const [allUploadsComplete, setAllUploadsComplete] = useState(false);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const files = Array.from(event.target.files);
        const newSelectedFiles = [...selectedFiles, ...files];
        setSelectedFiles(newSelectedFiles);

        setIsUploading(true);
        setAllUploadsComplete(false);
        const progress = { ...uploadProgress };

        for (const file of files) {
            const formData = new FormData();
            formData.append("images[]", file);

            await client
                .post(
                    `http://127.0.0.1:8000/api/properties/${id}/images`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            );
                            progress[file.name] = percentCompleted;
                            setUploadProgress({ ...progress });
                        },
                    }
                )
                .catch((error) => {
                    console.log(error);
                });
        }
        setIsUploading(false);
        setAllUploadsComplete(true);
    };
    const handleRemoveFile = (fileToRemove) => {
        const updatedSelectedFiles = selectedFiles.filter(
            (file) => file !== fileToRemove
        );
        setSelectedFiles(updatedSelectedFiles);
        const updatedProgress = { ...uploadProgress };
        delete updatedProgress[fileToRemove.name];
        setUploadProgress(updatedProgress);
        if (updatedSelectedFiles.length === 0) {
            fileInputRef.current.value = "";
        }
    };
    const handleUpload = () => {
        if (allUploadsComplete) {
            navigate("/lessor/manage-listings");
        }
    };

    return (
        <div className="p-4 container">
            <div className="first_seconStep_container m-0 mt-2 mb-3 d-flex flex-row justify-content-center align-items-center">
                <div className="second_step_circle text-white fw-bold fs-5 d-flex justify-content-center align-items-center">
                    <div className="step_aligned_line_2"></div>2
                </div>
            </div>
            <input
                className="form-control"
                type="file"
                multiple
                onChange={handleFileChange}
                disabled={isUploading}
                ref={fileInputRef}
            />
            {selectedFiles.map((file) => (
                <div key={file.name} className="imagesProgress_list_container mt-2">
                    <div className="row m-0">
                        <div className="col-7">
                            <p className="w-100 m-0">
                                {file.name}: {uploadProgress[file.name] || 0}%
                            </p>
                        </div>
                        <div className="col-5">
                            <div className="row m-0">
                                <div className="col-9 d-flex justify-content-center align-items-center p-0">
                                    <progress
                                        value={uploadProgress[file.name] || 0}
                                        max="100"
                                        className="w-100"
                                    ></progress>
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center p-0">
                                    <button
                                        onClick={() => handleRemoveFile(file)}
                                        className="btn w-100 fs-5 p-0 d-flex justify-content-center align-items-center"
                                    >
                                        <RiDeleteBin2Fill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="addBtn_addListingP_Container w-100 d-flex justify-content-end">
                <button
                    onClick={handleUpload}
                    disabled={!allUploadsComplete || isUploading}
                    className="btn btn-success text-white fw-bold ps-5 pe-5 pt-2 pb-2 mt-2"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddListingStep2;
