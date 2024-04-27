import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../custom-axios";

export default function SignUo() {
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [nom, setNom] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        client
            .post("http://127.0.0.1:8000/api/signup", {
                name: nom,
                firstname,
                lastname,
                email,
                password,
                password_confirmation: passwordConfirmation,
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("id");
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("id", response.data.user.id);
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                    );
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
                    type="text"
                    className="w-50 form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="w-50 form-control"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                <br />

                <input
                    className="w-50 form-control"
                    type="text"
                    placeholder="firstname"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />

                <input
                    className="w-50 form-control"
                    type="text"
                    placeholder="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />

                <input
                    className="w-50 form-control"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                    className="w-50 form-control"
                    type="password"
                    placeholder="Repeat Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button className="btn btn-success mt-2" type="submit">
                    Signup
                </button>
            </form>
        </>
    );
}
