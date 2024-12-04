import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profession: 'Barber', // Default profession
        phoneNumber: '',
        city: 'Kolhapur', // Default city
    });

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("The data is ", formData)
        try {
            await axios.post(`${BASE_URL}/api/auth/signup`, formData);
            alert('Signup successful!');
        } catch (error) {
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Signup</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md">
                {/* Name Field */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded"
                    required
                />

                {/* Email Field */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded"
                    required
                />

                {/* Password Field */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded"
                    required
                />

                {/* Profession Dropdown */}
                <label htmlFor="profession" className="block text-lg font-medium mb-2">
                    Select Profession
                </label>
                <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded"
                >
                    <option value="Barber">Barber</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Carpenter">Carpenter</option>
                    <option value="Mechanic">Mechanic</option>
                    <option value="Painter">Painter</option>
                    <option value="Shopkeeper">Shopkeeper</option>
                </select>

                {/* Phone Number Field */}
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded"
                    required
                />

                {/* City Dropdown */}
                <label htmlFor="city" className="block text-lg font-medium mb-2">
                    Select City
                </label>
                <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded"
                >
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Satara">Satara</option>
                </select>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
