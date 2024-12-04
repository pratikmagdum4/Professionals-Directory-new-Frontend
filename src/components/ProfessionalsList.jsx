import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the city parameter from the URL
import axios from 'axios';
import { BASE_URL } from '../api';

const ProfessionalsList = () => {
    const { city } = useParams(); // Extract city parameter from the URL
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        // Fetch professionals based on the selected city
        axios
            .get(`${BASE_URL}/api/professionals?city=${city}`)
            .then((response) => {
                console.log("The response is", response)
                setProfessionals(response.data);
            })
            .catch((error) => console.error(error));

    }, [city]); // Re-run when city changes

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Professionals in {city.charAt(0).toUpperCase() + city.slice(1)}</h1>
            {professionals.length > 0 ? (
                professionals.map((professional) => (
                    <div key={professional.id} className="bg-gray-100 p-4 mb-2 rounded">
                        <h2 className="text-lg font-bold">{professional.name}</h2>
                        <p>{professional.profession}</p>
                        <p>{professional.email}</p>
                        <p>{professional.phoneNumber}</p>
                    </div>
                ))
            ) : (
                <p>No professionals found in {city}.</p>
            )}
        </div>
    );
};

export default ProfessionalsList;
