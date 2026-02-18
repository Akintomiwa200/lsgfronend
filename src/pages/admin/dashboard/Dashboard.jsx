import { useEffect, useState } from "react";
import { contactService, quotationService, buyerService, realtorService, socket } from "../../../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    contacts: 0,
    quotes: 0,
    buyers: 0,
    realtors: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contacts, quotes, buyers, realtors] = await Promise.all([
          contactService.getAll(),
          quotationService.getAll(),
          buyerService.getAll(),
          realtorService.getAll()
        ]);

        setStats({
          contacts: contacts.data.length,
          quotes: quotes.data.length,
          buyers: buyers.data.length,
          realtors: realtors.data.length
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();

    // Real-time updates for stats
    socket.on("newContact", () => setStats(prev => ({ ...prev, contacts: prev.contacts + 1 })));
    socket.on("newQuotation", () => setStats(prev => ({ ...prev, quotes: prev.quotes + 1 })));
    socket.on("newBuyer", () => setStats(prev => ({ ...prev, buyers: prev.buyers + 1 })));
    socket.on("newRealtor", () => setStats(prev => ({ ...prev, realtors: prev.realtors + 1 })));

    return () => {
      socket.off("newContact");
      socket.off("newQuotation");
      socket.off("newBuyer");
      socket.off("newRealtor");
    };
  }, []);

  const statCards = [
    { label: "Total Contacts", count: stats.contacts, color: "bg-blue-500" },
    { label: "Quote Requests", count: stats.quotes, color: "bg-green-500" },
    { label: "Investor Requests", count: stats.buyers, color: "bg-purple-500" },
    { label: "Realtor Registrations", count: stats.realtors, color: "bg-orange-500" }
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className={`${card.color} p-6 rounded-xl shadow-lg text-white`}>
            <h3 className="text-lg font-medium opacity-80">{card.label}</h3>
            <p className="text-4xl font-bold mt-2">{card.count}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Real-time Activity Feed</h2>
        <div className="space-y-4">
          <p className="text-gray-600 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
            Listening for new submissions live...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;