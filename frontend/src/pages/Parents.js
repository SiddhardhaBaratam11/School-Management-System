
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SchoolCard from '../components/SchoolCard';
import './Parents.css'; 

const Parents = () => {
  const [schools, setSchools] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    fetchSchools();
  }, [page, filter]); // Refetch schools when page or filter changes

  const fetchSchools = async () => {
    try {
      let url = `http://localhost:5000/parents?page=${page}`;
      if (filter) {
        url += `&filter=${filter}`;
      }
      const response = await axios.get(url);
      console.log('Response:', response.data); 
      setSchools(response.data.schools);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };
  
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="parents-page">
      <div>
        <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by school name" />
        {filteredSchools.map((school, index) => (
          <div key={index}>
          </div>
        ))}
      </div>

      <div className="school-cards">
        {filteredSchools.map((school) => (
          <SchoolCard key={school._id} school={school} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Parents;