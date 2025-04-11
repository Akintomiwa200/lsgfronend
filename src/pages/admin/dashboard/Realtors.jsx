import { useEffect, useState } from "react";

const Realtors = () => {
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    fetch('https://lsg-backend.onrender.com/api/realtors')
      .then(response => response.json())
      .then(data => setRealtors(data))
      .catch(error => console.error('Error fetching realtors:', error));
  }, []);

  return (
    <div>
      <h1>Realtors</h1>
      <ul>
        {realtors.map((realtor, index) => (
          <li key={realtor.id || index}>{realtor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Realtors;
