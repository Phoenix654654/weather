import React from 'react';
import styles from './../components/Header/Header.module.css';
import axios from 'axios';


function Form({ setCurrent, setFiveDays, isLight }) {

    const getWeatherUseCityName = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=848988ae48881aeed7809971f03bdb03`)
            .then(({ data }) => setCurrent(data))
            .catch(() => alert('Увы такого города нет!'));

        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=848988ae48881aeed7809971f03bdb03`)
            .then(({data}) => setFiveDays(data.list));
        e.target[0].value = '';
    };

    return (
        <div>
            <form className={styles.form} onSubmit={getWeatherUseCityName}>
                <input placeholder='Write city...' className={`${styles.input} ${isLight ? styles.light : ''}`} type="search" required />
                <button className={`${styles.button} ${isLight ? styles.light : ''}`} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Form