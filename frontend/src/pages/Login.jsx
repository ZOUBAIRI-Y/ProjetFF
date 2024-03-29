import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../custom-axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        client
            .post("http://127.0.0.1:8000/api/login", { email, password })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("id");
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("id", response.data.user.id);
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error.response.data.errors);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form p-4">
                <input
                    className="w-50 form-control"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                    className="w-50 form-control"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-success mt-2" type="submit">
                    Login
                </button>
            </form>
        </>
    );
}
