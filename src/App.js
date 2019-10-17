import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [height, setHeight] = useState(0);

    const [weight, setWeight] = useState(0);

    const [status, setStatus] = useState("");

    const [bmi, setBmi] = useState(0.0);

    useEffect(() => {
        const newBmi = Math.round((weight / Math.pow(height / 100, 2)) * 100) / 100;
        setBmi(newBmi || 0.0);
        setStatus(getStatus(newBmi));
    }, [height, weight]);

    const reset = () => {
        setHeight(0);
        setWeight(0);
    };

    return (
        <div className="App">
            <h1>BMI Healthy Weight Calculator</h1>
            <div className="content">
                <h4>Body Mass Index (BMI) = <span>{bmi}</span></h4>
                <h4>{status}</h4>
                <fieldset>
                    <label htmlFor="height">Height (cm) </label>
                    <input
                        id="height"
                        type="text"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="weight">Weight (kg) </label>
                    <input
                        id="weight"
                        type="text"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                    />
                </fieldset>
                <button onClick={() => reset()}>RESET</button>
            </div>
        </div>
    );
}

function getStatus(bmi) {
    let result = "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) result = "Normal Weight";
    if (bmi >= 25 && bmi <= 29.9) result = "Overweight";
    if (bmi >= 30 && bmi <= 35) result = "Obesity";
    if (bmi > 35) result = "Severe Obesity";
    return result;
}

export default App;
