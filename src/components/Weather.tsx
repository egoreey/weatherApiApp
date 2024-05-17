import React from 'react';

interface WeatherData {
    main: {
        temp: number;
    };
    name: string;
}

interface WeatherProps {
    weatherData: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
    return (
        <div className="weather">
            <div>
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>
            </div>
        </div>
    );
};

export default Weather;
