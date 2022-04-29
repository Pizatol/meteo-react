import React, { useState } from "react";
import css from "../styles/Meteo.module.scss";

export default function Weather() {
    const [toggleBg, setToggleBg] = useState(true);

    const [request, setRequest] = useState("");
    const [weather, setWeather] = useState({});

    const api = {
        key: "6c02486c9bb245de76e2f70778a587ba",
        base: "https://api.openweathermap.org/data/2.5/",
    };

    const search = (e) => {
        if (e.key === "Enter") {
            fetch(
                `${api.base}weather?q=${request}&units=metric&APPID=${api.key}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setRequest("");
                    setWeather(result);						  
                });
        }
    };

    const dateBuilder = (e) => {
        let months = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Aout",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
        ];
        let days = [
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
            "dimanche",
        ];
        let day = days[e.getDay()];
        let date = e.getDate();
        let month = months[e.getMonth()];
        let year = e.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div
            className={
                (typeof weather.main != "undefined") ?
					  ((weather.main.temp > 16) ?    css.global_container : css.global_container_cold )
					   : ( css.undefined_search_bg )
            }
        >
            <div className={css.search_bar}>
              
                <input
                    type="text"
                    placeholder="Search city"
                    onChange={(e) => setRequest(e.target.value)}
                    value={request}
                    onKeyPress={search}
                />
               
            </div>

            {typeof weather.main != "undefined" ? (
                <div className={css.search_result}>
                    <div className={css.informations}>
                        <div className={css.location}>
                            {weather.name}, {weather.sys.country}{" "}
                        </div>
                        <div className={css.date}>
                            {dateBuilder(new Date())}
                        </div>
                    </div>

                    <div className={css.weather_box}>
                        <div className={css.temp}>
                            <span> {Math.round(weather.main.temp)}°c </span>
                        </div>
                        <div className={css.weather}> {weather.weather[0].main}  </div>
                    </div>
                </div>
            ) : (
                <div className={css.undefined_search}>
						 <h1>Search location</h1>
					 </div>
            )}
        </div>
    );
}
