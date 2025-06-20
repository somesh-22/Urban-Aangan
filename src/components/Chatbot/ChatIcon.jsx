import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl z-50">
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatIcon;
