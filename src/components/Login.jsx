import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
            console.log("THe response is ", response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.user._id);
            alert('Login successful!');
            navigate('/login/home')
        } catch (error) {
            alert('Login failed');
            console.log("Error in login ", error)
        }

    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-2 p-2"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mb-2 p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
