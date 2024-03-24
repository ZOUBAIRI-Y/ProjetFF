import client from "../../custom-axios";
import { useParams } from "react-router-dom";

const AddListingStep2 = () => {
    const { id } = useParams();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("images[]", file);
        client
            .post(
                "http://127.0.0.1:8000/api/properties/" + id + "/images",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="p-4">
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
            <input
                className="form-control "
                type="file"
                onChange={handleFileUpload}
            />
        </div>
    );
};
export default AddListingStep2;
