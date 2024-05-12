import React, { useRef } from "react"
import { Hero } from "./components/Hero.jsx"
import { Cards } from "./components/Cards.jsx"
import { TechPlug } from "./components/TechPlug.jsx"
import { Flavors } from "./components/Flavors.jsx"
import { NoTroubles } from "./components/NoTroubles.jsx"
import { Spotify } from "./components/Spotify.jsx"
import { Mynthos } from "./components/Mynthos.jsx"
import { Collab } from "./components/Collab.jsx"
import { BuyTototte } from "./components/BuyTototte.jsx"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { VerticalLines } from "./components/VerticalLines.jsx"
import { HeaderCenter } from "./components/HeaderCenter.jsx"

export default function App() {

	return (
		<>
			<Header  />
			<HeaderCenter />
			<main className='relative overflow-hidden flex flex-col items-center -mt-20 md:-mt-36 max-w-[100dvw]'>
				<VerticalLines />
				<Hero />
				<Cards />
				<TechPlug />
				<Flavors />
				<NoTroubles />
				<Spotify />
				<Mynthos />
				<Collab />
			</main>
			<BuyTototte />
			<Footer />
		</>
	)
}
