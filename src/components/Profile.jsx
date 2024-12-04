import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api';
const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profession: 'Barber',
        phoneNumber: '',
        city: 'Kolhapur',
    });
    const id = localStorage.getItem('id')
    // Fetch the professional's current data when the component mounts
    useEffect(() => {
        const fetchProfileData = async () => {
            try {

                const response = await axios.get(`${BASE_URL}/api/professional/profile/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setFormData(response.data);
            } catch (error) {
                alert('Failed to load profile data');
                console.error("Error loading profile data ", error)
            }
        };

        fetchProfileData();
    }, []);
    console.log("THe token is ", localStorage.getItem('token'))
    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    // Handle form submission to update the profile
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${BASE_URL}/api/professional/profile/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            alert('Profile updated successfully!');
        } catch (error) {
            alert('Failed to update profile');
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
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
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
