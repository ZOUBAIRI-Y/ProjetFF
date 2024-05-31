import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../custom-axios";
import loginBG from "../assets/loginBG.jpg";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [nom, setNom] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) navigate("/");
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.setItem("token", token);
            localStorage.setItem("id", user.id);
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
            navigate("/");
        }
    }, [token, user, navigate]);

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
                    setToken(response.data.token);
                    setUser(response.data.user);
                }
            })
            .catch((error) => {
                console.log(error.response.data.errors);
            });
    };

    return (
        <div className="container-fluid login_signup_page_container p-0 m-0">
            <div className="login_signup_page_content row no-gutters m-0 p-0">
                <div className="col-md-6 signupBG_container p-0">
                    <img
                        src={loginBG}
                        className="loginBG_signup"
                        alt="Background for login page"
                    />
                </div>
                <div className="col-md-6 signup_form_container p-4 d-flex flex-column justify-content-center align-items-center">
                    <div className="signup_quote_container p-5 pb-2">
                        <p className="signup_quote">
                            Start your rental journey today. Sign up for
                            hassle-free living, tailored just for you!
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="form_signup_page p-5 pt-2"
                    >
                        <h3 className="text-dark text-center signup_divider">
                            <span>Signup</span>
                        </h3>
                        <p className="text-center">
                            You already have an account?{" "}
                            <a href="/login">Signin</a>
                        </p>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        <div className="row first_lastname_container p-0 m-0 mb-2">
                            <div className="col-md first_name_S_container m-0 mb-sm-2 mb-md-0 me-md-1 p-0">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="firstname"
                                    value={firstname}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="col-md last_name_S_container m-0 ms-md-1 p-0">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="lastname"
                                    value={lastname}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <input
                            className="form-control mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className="form-control mb-2"
                            type="password"
                            placeholder="Repeat Password"
                            value={passwordConfirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                        />
                        <button
                            className="btn btn-success w-100 mt-3"
                            type="submit"
                        >
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
