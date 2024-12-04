import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [city, setCity] = useState('Kolhapur'); // Default city selection
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            navigate(`/professionals/${city}`);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Find Professionals in Your City</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md">
                <label htmlFor="city" className="block text-lg font-medium mb-2">Select a City</label>
                <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 mb-4 border rounded"
                >
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Satara">Satara</option>
                </select>
                <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Home;
