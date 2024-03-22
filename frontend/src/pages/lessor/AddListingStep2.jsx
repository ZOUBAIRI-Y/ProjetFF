import client from "../../custom-axios";
import { useParams } from "react-router-dom";

const AddListingStep2 = () => {
    const { id } = useParams();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await client.post(
                "http://127.0.0.1:8000/api/properties/" + id + "/images",
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error uploading images:", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Step 2</h1>
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input name="images[]" type="file" />
            <br />
            <input type="submit" value="upload" />
        </form>
    );
};

export default AddListingStep2;
