import { useEffect, useState } from "react";
import { contactService, socket } from "../../../services/api";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await contactService.getAll();
                setContacts(response.data);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        fetchContacts();

        socket.on("newContact", (newContact) => {
            setContacts((prev) => [newContact, ...prev]);
        });

        return () => {
            socket.off("newContact");
        };
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
            <div className="grid gap-4">
                {contacts.map((contact) => (
                    <div key={contact._id} className="p-4 bg-white shadow rounded-lg border-l-4 border-blue-500">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg">{contact.subject || "No Subject"}</h3>
                            <span className="text-sm text-gray-500">{new Date(contact.createdAt).toLocaleString()}</span>
                        </div>
                        <p className="text-gray-700 mt-2">{contact.message}</p>
                        <div className="mt-4 flex gap-4 text-sm text-gray-600">
                            <span>By: {contact.name}</span>
                            <span>Email: {contact.email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts;
