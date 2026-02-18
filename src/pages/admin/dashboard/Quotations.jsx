import { useEffect, useState } from "react";
import { quotationService, socket } from "../../../services/api";

const Quotations = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await quotationService.getAll();
                setQuotes(response.data);
            } catch (error) {
                console.error("Error fetching quotes:", error);
            }
        };

        fetchQuotes();

        socket.on("newQuotation", (newQuotation) => {
            setQuotes((prev) => [newQuotation, ...prev]);
        });

        return () => {
            socket.off("newQuotation");
        };
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Building Quote Requests</h1>
            <div className="grid gap-4">
                {quotes.map((quote) => (
                    <div key={quote._id} className="p-4 bg-white shadow rounded-lg border-l-4 border-green-500">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg">{quote.name}</h3>
                            <span className="text-sm text-gray-500">{new Date(quote.createdAt).toLocaleString()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
                            <p><strong>Phone:</strong> {quote.phone}</p>
                            <p><strong>Email:</strong> {quote.email}</p>
                            <p><strong>Plots:</strong> {quote.plots}</p>
                            <p><strong>Purpose:</strong> {quote.purpose}</p>
                        </div>
                        <p className="mt-4 text-gray-600"><strong>Status:</strong> <span className="capitalize px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">{quote.status}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quotations;
