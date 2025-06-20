import React, { useState } from 'react';

const PropertySearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const handleSearch = () => {
    onSearch({ location, keyword, priceRange });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-10 max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 justify-between">
        <input
          type="text"
          placeholder="Search by title..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-auto"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-auto"
        />
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-auto"
        >
          <option value="all">All Prices</option>
          <option value="low">Below ₹1 Cr</option>
          <option value="mid">₹1 Cr - ₹2.5 Cr</option>
          <option value="high">Above ₹2.5 Cr</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
