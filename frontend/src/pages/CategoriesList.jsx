// import { useEffect, useState } from "react";
// import Property from "../components/Property";
import { useEffect, useState } from "react";
import client from "../custom-axios";
import { Link } from "react-router-dom";

export default function CategoriesList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("categories") === null) {
            client
                .get("http://127.0.0.1:8000/api/categories")
                .then(({ data }) => {
                    setList(data.data);
                    localStorage.setItem(
                        "categories",
                        JSON.stringify(data.data)
                    );
                    console.log(data);
                })
                .catch((err) => console.log(err));
        } else {
            setList(JSON.parse(localStorage.getItem("categories")));
        }
    }, []);
    return (
        <>
            <h1 className="py-4">Categories:</h1>
            {list &&
                list.map((cat) => (
                    <div className="p-3" key={cat.id}>
                        <Link key={cat.id} to={"/properties-list/" + cat.id}>
                            {cat.name}
                        </Link>
                        <br />
                        <img
                            src={"http://127.0.0.1:8000" + cat.image}
                            key={Date.now}
                        />
                        <br />
                        <h3>description:</h3>
                        <p>{cat.description}</p>
                        <hr />
                    </div>
                ))}
        </>
    );
}
