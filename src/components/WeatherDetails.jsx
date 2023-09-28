import React from 'react';
import logo from "../assets/icon.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

const WeatherDetails = ({ data }) => {
  if (!data) {
    return <div>Loading weather details...</div>;
  }

  const { celcius, city, humidity, speed } = data;

  return (
    <div className="winfo">
      <img className='img1' src={logo} alt="logo" />
      <h1>{celcius}°C</h1>
      <h2>{city}</h2>
      <div className="details">
        <div className="col">
          <img src={humidity} className='img2' alt="" />
          <div className="humidity">
            <p>{humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={wind} className='img2' alt="" />
          <div className="wind">
            <p>{speed} km/h</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
