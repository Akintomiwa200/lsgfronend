import { useEffect, useState } from "react";

const Quotations = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch("https://lsg-backend.onrender.com/api/quotes") // Replace with your actual backend URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setQuotes(data))
            .catch(error => console.error("Error fetching buyers:", error));
    }, []); // The dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h1>Quotations</h1>
            <ul>
                {quotes.map((quote, index) => (
                    <div key={quote.id || index} className="quote-card">
                        <p>{quote.text}</p>
                        <span>{quote.author}</span>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Quotations;
