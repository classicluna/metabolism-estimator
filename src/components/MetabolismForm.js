import React, { useState } from 'react';
import './MetabolismForm.css';

const MetabolismForm = ({ calculateMetabolism }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateMetabolism({ age, gender, weight, height, activityLevel });
  };

  return (
    <form onSubmit={handleSubmit} className='metabolism-form'>
      <label>
        Age:
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </label>
      <label>
        Weight (kg):
        <input
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Height (cm):
        <input
          type='number'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Activity Level:
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value='sedentary'>Sedentary (little or no exercise)</option>
          <option value='lightlyActive'>
            Lightly Active (light exercise/sports 1-3 days/week)
          </option>
          <option value='moderatelyActive'>
            Moderately Active (moderate exercise/sports 3-5 days/week)
          </option>
          <option value='veryActive'>
            Very Active (hard exercise/sports 6-7 days/week)
          </option>
          <option value='extraActive'>
            Extra Active (very hard exercise/sports & physical job)
          </option>
        </select>
      </label>
      <button type='submit'>Calculate Metabolism</button>
    </form>
  );
};

export default MetabolismForm;
