import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Input from './components/Input';
import Button from './components/Button';

const App: React.FC = () => {
    const apiKey = '09756a68734ca053374a14f4120e3111';
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<null>(null); // Состояние для данных о погоде

    const handleInputChange = (value: string) => {
        setCity(value);
    };

    const handleButtonClick = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <Input value={city} onChange={handleInputChange} />
            <Button onClick={handleButtonClick}>Get Weather</Button>
            {weatherData && <Weather weatherData={weatherData} />}
        </div>
    );
};

export default App;
