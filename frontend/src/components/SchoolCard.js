import React from 'react';
import './SchoolCard.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SchoolCard = ({ school, onEdit, onDelete, editable }) => {

  const handleDelete = (id) => {
    onDelete(id);
    toast.info("School deleted successfully!");
  };

  return (
    <div className="school-card"  key={school._id}>
      <img src={school.picture} alt={school.name} width={"200px"} />
      <h2>{school.name}</h2>
      <p>Fees: {school.fees}</p>
      <p>{school.details}</p>
      {editable && (
        <div className="button-container">
          <button onClick={() => onEdit(school)}>Edit</button>
          <button onClick={() => handleDelete(school._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default SchoolCard;