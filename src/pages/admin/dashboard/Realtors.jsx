import { useEffect, useState } from "react";
import { realtorService, socket } from "../../../services/api";

const Realtors = () => {
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    const fetchRealtors = async () => {
      try {
        const response = await realtorService.getAll();
        setRealtors(response.data);
      } catch (error) {
        console.error("Error fetching realtors:", error);
      }
    };

    fetchRealtors();

    socket.on("newRealtor", (newRealtor) => {
      setRealtors((prev) => [newRealtor, ...prev]);
    });

    return () => {
      socket.off("newRealtor");
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Realtor Registrations</h1>
      <div className="grid gap-4">
        {realtors.map((realtor) => (
          <div key={realtor._id} className="p-4 bg-white shadow rounded-lg border-l-4 border-orange-500">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{realtor.name}</h3>
              <span className="text-sm text-gray-500">{new Date(realtor.createdAt).toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
              <p><strong>Phone:</strong> {realtor.phone}</p>
              <p><strong>Email:</strong> {realtor.email}</p>
              <p><strong>Agency:</strong> {realtor.agency}</p>
              <p><strong>License:</strong> {realtor.licenseNumber}</p>
              <p><strong>Experience:</strong> {realtor.experience}</p>
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <p><strong>Specialization:</strong> {realtor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realtors;
