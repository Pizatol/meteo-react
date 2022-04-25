import React, {useState} from 'react'
import css from '../styles/Meteo.module.scss'

export default function Weather() {


	const [toggleBg, setToggleBg] = useState(true)

	const api = {
		key : "6c02486c9bb245de76e2f70778a587ba",
		base : "https://api.openweathermap.org/data/2.5/"
	}

	const dateBuilder = (e) => {

		let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
		let days = ["lundi" , "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
		let day = days[e.getDay()]
		let date = e.getDate()
		let month = months[e.getMonth()]
		let year = e.getFullYear()

		return `${day} ${date} ${month} ${year}`

	}



	const toggle = (e) => {
		e.preventDefault()
		setToggleBg(!toggleBg)
		console.log(toggleBg);
		
	}



  return (



	 <div className={ toggleBg ? css.global_container :  css.global_container_cold}>
			<div className={css.search_bar}>
			<form>
					<input type="text" placeholder='Search city' />
					<button onClick={(e)=> toggle(e)}> Search</button>
			</form>
			</div>

			<div className={css.informations}>
				<div className={css.location}>Toulouse, FR</div>
				<div className={css.date}>{dateBuilder(new Date())} </div>
			</div>

			<div className={css.weather_box}>
			<div className={css.temp}> 15°c</div>
				<div className={css.weather}> Sunny</div>
			</div>
	 </div>
  )
}
