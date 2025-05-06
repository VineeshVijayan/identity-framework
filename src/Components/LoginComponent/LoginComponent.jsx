import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import IdentityIcon from "../Asset/Identity.png";
import "./Login.scss";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const correctEmail = "Test@gmail.com";
    const correctPassword = "Test123";

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === correctEmail && password === correctPassword) {
            navigate("/dashboard");
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <div className="wrapper">
            <Form onSubmit={handleLogin}>

                <div className="login-icon">
                    <img src={IdentityIcon} alt="Identity Icon" />
                </div>

                <h1>Identity Framework</h1>
                {error && <Alert variant="danger">{error}</Alert>}

                <div className="input-box">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {showPassword ? (
                        <FaEyeSlash
                            className="icon"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <FaEye
                            className="icon"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <Button type="submit" className="login-btn">Login</Button>
            </Form>
            <div className="powered-by">
                Powered by Identity Framework
            </div>
        </div>

    );
};

export default LoginComponent;
