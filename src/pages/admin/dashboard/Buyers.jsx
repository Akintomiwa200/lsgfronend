import { useEffect, useState } from "react";
import { buyerService, socket } from "../../../services/api";

const Buyers = () => {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        const fetchBuyers = async () => {
            try {
                const response = await buyerService.getAll();
                setBuyers(response.data);
            } catch (error) {
                console.error("Error fetching buyers:", error);
            }
        };

        fetchBuyers();

        socket.on("newBuyer", (newBuyer) => {
            setBuyers((prev) => [newBuyer, ...prev]);
        });

        return () => {
            socket.off("newBuyer");
        };
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Investor Requests</h1>
            <div className="grid gap-4">
                {buyers.map((buyer) => (
                    <div key={buyer._id} className="p-4 bg-white shadow rounded-lg border-l-4 border-purple-500">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg">{buyer.name}</h3>
                            <span className="text-sm text-gray-500">{new Date(buyer.createdAt).toLocaleString()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
                            <p><strong>Phone:</strong> {buyer.phone}</p>
                            <p><strong>Email:</strong> {buyer.email}</p>
                            <p><strong>Plots:</strong> {buyer.plots}</p>
                            <p><strong>Purpose:</strong> {buyer.purpose}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Buyers;