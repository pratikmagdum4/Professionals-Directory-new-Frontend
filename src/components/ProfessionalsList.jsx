import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../api';

const ProfessionalsList = () => {
    const { city } = useParams();
    const [searchParams] = useSearchParams();
    const profession = searchParams.get('profession');
    const [professionals, setProfessionals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/professionals?city=${city}&profession=${profession}`);
                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage || 'Failed to fetch professionals.');
                }
                const data = await response.json();

                // Ensure the data is an array before setting state
                if (Array.isArray(data)) {
                    setProfessionals(data);
                } else {
                    throw new Error('Unexpected response format.');
                }
                setError(null);
            } catch (err) {
                console.error('Error fetching professionals:', err.message);
                setError(err.message);
                setProfessionals([]); // Reset to avoid stale data
            }
        };

        fetchProfessionals();
    }, [city, profession]);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Professionals in {city} ({profession || 'All Professions'})
            </h1>
            {error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : professionals.length > 0 ? (
                <ul className="space-y-4">
                    {professionals.map((professional, index) => (
                        <li key={index} className="bg-gray-100 p-4 rounded shadow">
                            <h2 className="text-xl font-bold">{professional.name}</h2>
                            <p>Profession: {professional.profession}</p>
                            <p>City: {professional.city}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">No professionals found for the selected criteria.</p>
            )}
        </div>
    );
};

export default ProfessionalsList;
