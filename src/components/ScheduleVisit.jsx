import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const ScheduleVisit = ({ projectTitle }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('access_key', 'YOUR_WEB3FORMS_KEY_HERE');
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Message', `Visit request for ${projectTitle} on ${selectedDate?.toLocaleString()} — ${formData.message}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      toast.success('Visit scheduled successfully!');
      setFormData({ name: '', email: '', message: '' });
      setSelectedDate(null);
    } else {
      toast.error('Failed to schedule visit');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 bg-gray-100 rounded">
      <h3 className="text-lg font-semibold mb-2">Schedule a Visit</h3>
      <input
        type="text"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full mb-2 p-2 border rounded"
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select Date & Time"
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Any message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full mb-2 p-2 border rounded"
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Book Visit
      </button>
    </form>
  );
};

export default ScheduleVisit;
