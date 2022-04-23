import React from 'react'
import css from '../styles/Meteo.module.scss'

export default function Weather() {

	const api_call = async => {



		 fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
	}


  return (



	 <div>

	 </div>
  )
}
