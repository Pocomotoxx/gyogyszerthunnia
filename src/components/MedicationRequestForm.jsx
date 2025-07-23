import React from 'react';

const MedicationRequestForm = () => {
  return (
    <form>
      <div>
        <label>Medication:</label>
        <input type="text" />
      </div>
      <div>
        <label>Dosage:</label>
        <input type="text" />
      </div>
      <div>
        <label>Frequency:</label>
        <input type="text" />
      </div>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default MedicationRequestForm;
