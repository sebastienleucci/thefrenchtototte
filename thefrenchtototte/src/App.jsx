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

export default function App() {
	return (
		<>
			<Header />
			<main className='relative w-[100dvw] overflow-hidden flex flex-col items-center bg-beige-light'>
				<VerticalLines />
				{/* <Hero /> */}
				{/* <Cards /> */}
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

const VerticalLines = () => {
	return (
		<>
			<div className='fixed left-1/2 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='fixed left-6 lg:left-52 translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='fixed right-6 lg:right-52 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='hidden 2xl:block fixed left-[30%] translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='hidden 2xl:block fixed right-[30%] -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
		</>
	)
}
