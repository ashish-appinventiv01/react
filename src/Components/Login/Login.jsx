import React, { useState } from 'react';
import './Login.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="content-wrapper">
                <h2 className="page-heading">Orders</h2>
                <div className="login-Content">
                    <h1>Login</h1>
                    <form>
                        <div className="inputfield">
                            
                            <input type="text" placeholder="Username or email address *" id="username" name="username" required />
                            
                        </div>
                        <div className="inputfield">
                           
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder='Password *'
                                required
                            />
                            <span className="show-password" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" className="login-button">LOG IN</button>
                        <a href="/reset-password" className="lost-password">Lost your password?</a>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login;