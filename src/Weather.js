import React, {useState, useEffect} from 'react';

function Weather() {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await fetch("https://api.weather.gov/gridpoints/LWX/85,43/forecast", {
                headers: {
                    'User-Agent': '(edwin.torres.jr2@gmail.com)'
                }
            }
            )
            const data = await response.json();
            setWeatherData(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='weather-widget'>
            <h2>Weather Widget</h2>
            {weatherData ? (
                <div>
                <h1>{weatherData.properties.periods[0].temperature}</h1>
                </div>
            ) : (
                <p> Loading...</p>
            )}

        </div>
    );
}

export default Weather;
