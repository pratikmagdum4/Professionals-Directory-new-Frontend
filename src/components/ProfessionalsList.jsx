import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api';

const ProfessionalsList = () => {
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/professionals?city=NewYork`)
            .then((response) => {
                setProfessionals(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Professionals in New York</h1>
            {professionals.map((professional) => (
                <div key={professional.id} className="bg-gray-100 p-4 mb-2 rounded">
                    <h2 className="text-lg font-bold">{professional.name}</h2>
                    <p>{professional.profession}</p>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalsList;
