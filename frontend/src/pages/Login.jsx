import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../custom-axios";
import loginBG from "../assets/loginBG.jpg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        }
    }, [token, user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        client
            .post("http://127.0.0.1:8000/api/login", { email, password })
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
            <div className="login_signup_page_content row m-0 p-0">
                <div className="col-md-6 loginBG_container p-0">
                    <img
                        src={loginBG}
                        className="loginBG_signup"
                        alt="Background for login page"
                    />
                </div>
                <div className="col-md-6 login_form_container p-4 d-flex flex-column justify-content-center align-items-center">
                    <div className="login_quote_container p-5 pb-2">
                        <p className="login_quote">
                            Welcome back! Log in to continue your journey
                            towards hassle-free living and discover your perfect
                            stay!
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="form_login_page p-5 pt-2"
                    >
                        <h3 className="text-dark text-center login_divider">
                            <span>Log in</span>
                        </h3>
                        <p className="text-center">
                            Dont have an account? <a href="/signup">Signup</a>
                        </p>
                        <label htmlFor="email" className="form-label">
                            email
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="@xxx.xx"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className="form-label">
                            password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="btn btn-success w-100 mt-3 text-white fs-5 fw-bold"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
