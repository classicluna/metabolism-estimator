import React, { useState } from 'react';
import MetabolismForm from './components/MetabolismForm';
import MetabolismResult from './components/MetabolismResult';
import './App.css';

const App = () => {
  const [bmr, setBMR] = useState(null);
  const [tdee, setTDEE] = useState(null);

  const calculateMetabolism = ({
    age,
    gender,
    weight,
    height,
    activityLevel,
  }) => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseFloat(age);

    // Calculate BMR
    let bmr = 0;
    if (gender === 'male') {
      bmr =
        88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * ageInYears;
    } else if (gender === 'female') {
      bmr =
        447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * ageInYears;
    }

    // Calculate TDEE based on activity level
    let tdee = 0;
    switch (activityLevel) {
      case 'sedentary':
        tdee = bmr * 1.2;
        break;
      case 'lightlyActive':
        tdee = bmr * 1.375;
        break;
      case 'moderatelyActive':
        tdee = bmr * 1.55;
        break;
      case 'veryActive':
        tdee = bmr * 1.725;
        break;
      case 'extraActive':
        tdee = bmr * 1.9;
        break;
      default:
        break;
    }

    setBMR(bmr);
    setTDEE(tdee);
  };

  return (
    <div className='app'>
      <h1>Metabolism Estimator</h1>
      <MetabolismForm calculateMetabolism={calculateMetabolism} />
      {bmr !== null && tdee !== null && (
        <MetabolismResult bmr={bmr} tdee={tdee} />
      )}
    </div>
  );
};

export default App;
