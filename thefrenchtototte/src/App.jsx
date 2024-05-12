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
import React, { useEffect, useState } from "react"

export default function App() {
	const [scrollY, setScrollY] = useState(0)
	const [showElement, setShowElement] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setScrollY(scrollPosition)
			if (scrollPosition >= 900) {
				setShowElement(true)
			} else {
				setShowElement(false)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<>
			<Header />
			<div
				className={`hidden sticky md:flex items-start justify-center top-0 w-full z-40 pb-5 pointer-events-none duration-500 bg-gradient-to-b from-beige to-transparent ${
					showElement ? "opacity-100" : "opacity-0"
				}`}
			>
				<h1 className='text-3xl whitespace-nowrap pt-4'>the french tototte</h1>
				<img src='/icon/r.svg' className='w-[6px] mt-1 pt-4' />
			</div>
			<main className='relative w-[100dvw] overflow-hidden flex flex-col items-center -mt-20 md:-mt-36'>
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
