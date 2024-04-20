import React, { useState } from 'react';
import './SchoolForm.css';

const SchoolForm = ({ school, onSave, onCancel }) => {
  const [picture, setPicture] = useState(school ? school.picture : '');
  const [name, setName] = useState(school ? school.name : '');
  const [fees, setFees] = useState(school ? school.fees : '');
  const [details, setDetails] = useState(school ? school.details : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ picture, name, fees, details });
  };

  return (
    <form onSubmit={handleSubmit} className="school-form-container">
      <div className="form-group">
        <label htmlFor="picture">School picture URL</label>
        <input
          type="text"
          id="picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">School name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fees">School fees</label>
        <input
          type="number"
          id="fees"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="details">School details</label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button type="submit">Save</button> &nbsp;
        {school && <button onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default SchoolForm;
