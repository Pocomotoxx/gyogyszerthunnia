import React from 'react';

const MedicationAdministrationLogItem = ({ log }) => {
  return (
    <div>
      <h3>{log.medication}</h3>
      <p>{log.date}</p>
      <p>Administered by: {log.administeredBy}</p>
    </div>
  );
};

export default MedicationAdministrationLogItem;
