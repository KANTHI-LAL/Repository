import { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            alert("Please Enter Email");
            return;
        }

        if (password === "") {
            alert("Please Enter Password");
            return;
        }

        alert("Login Successful");

        navigate("/dashboard");
    };

    return (
        <div className="form-container">
            <div className="form">

                <h2>User Login</h2>

                <form onSubmit={handleSubmit}>
                    <fieldset className="formborder">

                        <label className="form-group">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="form-group">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <br />
                        <br />

                        <button
                            className="submit-button"
                            type="submit"
                        >
                            Login
                        </button>

                    </fieldset>

                    <br />

                    <div>
                        Don't have an account?{" "}
                        <Link to="/register">
                            Register here
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;