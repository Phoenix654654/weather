import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./Form/Form";

function App() {
  const [current, setCurrent] = useState({});
  const [fiveDays, setFiveDays] = useState([]);
  const [date, setDate] = useState('');
  const [isLight, setIsLight] = useState(true);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  function showPosition(position) {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=848988ae48881aeed7809971f03bdb03`
    ).then(({ data }) => setCurrent(data));

    axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=848988ae48881aeed7809971f03bdb03`
    ).then(({ data }) => {
      setFiveDays(data.list);
      setDate(data.list[0].dt_txt.slice(0, 10))
    });

  }

  useEffect(() => {
    getLocation()
  }, []);

  return (
    <div className={`App ${isLight ? 'light' : ''}`}>
      {JSON.stringify(current) !== "{}" ? (
        <div>
          <Header isLight={isLight} setIsLight={setIsLight} setCurrent={setCurrent} setFiveDays={setFiveDays}/>
          <Main isLight={isLight} current={current} fiveDays={fiveDays} date={date} setDate={setDate}/>
        </div>
      ) : (
        <div className="block-for-form">
          <Form isLight={isLight} setFiveDays={setFiveDays} setCurrent={setCurrent} />
        </div>
      )}
    </div>
  );
}

export default App;
