import { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "") {
            alert("Please Enter Name");
            return;
        }

        if (email === "") {
            alert("Please Enter Email");
            return;
        }

        if (password === "") {
            alert("Please Enter Password");
            return;
        }

        setSubmitted(true);
    };

    return (
        <div className="form-container">
            <div className="form">

                <h2>User Registration</h2>

                {submitted && (
                    <div className="Success-message">
                        User {name} successfully registered
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <fieldset className="formborder">

                        <label className="form-group">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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
                            Registration
                        </button>

                    </fieldset>

                    <br />

                    <div>
                        Already have an account?{" "}
                        <Link to="/login">
                            Login here
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Registration;