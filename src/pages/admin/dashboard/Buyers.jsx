import React, { useEffect, useState } from 'react';

const Buyers = () => {
    const [buyers, setBuyers] = useState([]);


    useEffect(() => {
        fetch('https://lsg-backend.onrender.com/api/buyers') // Replace with your actual backend URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setBuyers(data))
            .catch(error => console.error('Error fetching buyers:', error));
    }, []);


    return (
        <div>
            <h1>Buyers</h1>
            <ul>
                {buyers.map((buyer, index) => (
                    <li key={buyer.id || index}>{buyer.name}</li>
                ))}
            </ul>

        </div>
    );
};

export default Buyers;