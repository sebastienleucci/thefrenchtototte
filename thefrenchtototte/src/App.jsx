import { Hero } from "./components/Hero.jsx"
import { Cards } from "./components/Cards.jsx"
import { TechPlug } from "./components/TechPlug.jsx"
import { Flavors } from "./components/Flavors.jsx"
import { NoTroubles } from "./components/NoTroubles.jsx"
import { Spotify } from "./components/Spotify.jsx"
import { Mynthos } from "./components/Mynthos.jsx"
import { Collab } from "./components/Collab.jsx"

export default function App() {
	return (
		<>
			<header className='absolute z-10 w-full bg-transparent flex px-5 py-3 mt-2 justify-between items-center h-16'>
				<button className='h-full'>
					<img src='/icon/logo-01.svg' className='h-full' />
				</button>
				<button className='bg-brown text-beige py-2 px-6'>Acheter</button>
			</header>
			<main className='w-[100dvw] overflow-hidden flex flex-col items-center bg-beige-light'>
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
		</>
	)
}

const VerticalLines = () => {
	return (
		<>
			<div className='fixed left-1/2 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='fixed left-6 translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='fixed right-6 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
		</>
	)
}
