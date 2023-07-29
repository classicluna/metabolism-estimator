import React from 'react';
import './MetabolismResult.css';

const MetabolismResult = ({ bmr, tdee }) => {
  return (
    <div className='metabolism-result'>
      <h2>Metabolism Estimate</h2>
      <p>
        <strong>Basal Metabolic Rate (BMR):</strong> {bmr.toFixed(2)}{' '}
        calories/day
      </p>
      <p>
        <strong>Total Daily Energy Expenditure (TDEE):</strong>{' '}
        {tdee.toFixed(2)} calories/day
      </p>
    </div>
  );
};

export default MetabolismResult;
