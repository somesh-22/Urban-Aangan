import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase'; // adjust path

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const snapshot = await getDocs(collection(db, "contactSubmissions"));
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
      {messages.map((msg) => (
        <div key={msg.id} className="border p-4 mb-4 rounded bg-gray-100">
          <p><strong>Name:</strong> {msg.Name}</p>
          <p><strong>Email:</strong> {msg.Email}</p>
          <p><strong>Message:</strong> {msg.Message}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
