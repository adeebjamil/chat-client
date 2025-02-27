import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  // State to store data from the API
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [convoRes, msgRes, userRes] = await Promise.all([
          fetch('/api/conversations'),
          fetch('/api/messages'),
          fetch('/api/users'),
        ]);

        if (!convoRes.ok || !msgRes.ok || !userRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const conversationsData = await convoRes.json();
        const messagesData = await msgRes.json();
        const usersData = await userRes.json();

        // Set data to state
        setConversations(conversationsData);
        setMessages(messagesData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

      {/* Conversations Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Conversations</h2>
        <ul className="space-y-2">
          {conversations.map((convo, index) => (
            <li key={index} className="bg-white p-4 rounded-md shadow">
              {convo.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Messages Section */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Messages</h2>
        <ul className="space-y-2">
          {messages.map((message, index) => (
            <li key={index} className="bg-white p-4 rounded-md shadow">
              <p className="text-gray-700">From: {message.sender}</p>
              <p className="text-gray-500">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Users Section */}
      <div className="bg-purple-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
