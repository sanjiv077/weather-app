import "./home.css";

import { useEffect, useState } from "react";
import axios from "axios";
import WeatherDetails from "./components/WeatherDetails";
import Input from "./components/Input";

const Home = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  const getData = (url) => {
    if (name !== "") {
      axios
        .get(url) 
        .then((res) => {
          setData({
            celcius: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
          });
        })
        .catch((err) => alert("This city name doesn't exist"));
    }
  };

  const handleClick = () => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d1ac65b4b0b5d1aca8dcd7e8281be190&units=metric`
    );
  };

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         getData(
  //           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d1ac65b4b0b5d1aca8dcd7e8281be190&units=metric`
  //         );
  //       },
  //       (error) => {
  //         console.error("Error getting geolocation:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  return (
    <div className="container">
      <div className="weather">
        <Input setName={setName} handleClick={handleClick} />
        <WeatherDetails data={data} />
      </div>
    </div>
  );
};

export default Home;
