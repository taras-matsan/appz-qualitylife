import React from 'react';

const Sidebar =({ patient, visits }) => {
  return (
    <div className="sidebar">
      <div className="patient-info">
        <div className="patient-avatar">B.</div>
        <div className="patient-name">{patient.name}</div>
      </div>
      <div className="last-visits">
        <h2>Last visits</h2>
        {visits.map((visit, index) => (
          <div key={index} className="visit">{visit}</div>
        ))}
        <div className="view-all">view all →</div>
      </div>
    </div>
  );
};

export default Sidebar;