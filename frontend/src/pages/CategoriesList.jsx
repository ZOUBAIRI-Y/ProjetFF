// import { useEffect, useState } from "react";
// import Property from "../components/Property";
import { useEffect, useState } from "react";
import client from "../custom-axios";

export default function CategoriesList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        client
            .get("http://127.0.0.1:8000/api/categories")
            .then(({ data }) => {
                setList(data.data);
                console.log(data);
            })

            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <h1 className="py-4">Categories:</h1>
            {list &&
                list.map((cat) => (
                    <h2 className="p-3" key={cat.id}>
                        {cat.name}
                    </h2>
                ))}
        </>
    );
}