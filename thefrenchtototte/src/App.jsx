import { Hero } from "./components/Hero.jsx"
import { Cards } from "./components/Cards.jsx"

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
				{/* Techno Plug&Tot */}
				<section className='relative flex flex-col justify-center mt-24 mx-auto'>
					<img type='video/mp4' src='/img/plug.gif' className='relative z-10 w-full' />
					<img src='/img/bg-gradient.svg' className='absolute top-36' />
					<div className='relative -mt-20 px-10 pt-20 bg-gradient-to-t from-beige-light to-beige'>
						<h1 className='mb-5 text-5xl text-brown-dark '>
							technologie <br /> plug'n'tote
						</h1>
						<p>
							La tototte est équipée de la <b className='text-brown-dark'>technologie plug'n'tote</b>,
							permettant de changer de plug à volonté, offrant ainsi un accès à une
							<b className='text-brown-dark'> gamme infinie de saveurs de suçotage</b> pour satisfaire
							tous les goûts. <br />
							<br />
							Cette technologie vous permet de changer en un clin d’œil de saveur pour
							<b className='text-brown-dark'> voyager du bout des lèvres.</b>
						</p>
					</div>
					<button className='font-gustavo font-medium text-brown py-2 px-6 mt-6'>
						Decouvrir les saveurs
					</button>
					<div className='w-[2px] rounded h-96 mx-auto bg-gradient-to-b from-brown to-transparent' />
				</section>
				{/* Saveurs */}
				<section className='z-10 flex flex-col mt-44 mb-64 w-full mx-auto px-5'>
					<div>
						<ul className='flex'>
							<OneSaveur
								saveur='s1'
								side='left'
								title='Fraise'
								text='Une fraise française cueillie dans nos chères régions'
							/>
							<OneSaveur
								saveur='s2'
								side='left'
								title='Menthe'
								text='Pour une haleine fraiche avant vos reunions'
							/>
							<OneSaveur
								saveur='s3'
								side='right'
								title='Bubble Gum'
								text='Un gout sucré pour retourner en enfance'
							/>
							<OneSaveur
								saveur='s4'
								side='right'
								title='Spicy'
								text='Pour ceux qui aiment vivre de nouvelles choses tous les jours'
							/>
						</ul>
						<div className='-mt-4 h-24 flex items-end overflow-hidden'>
							<img src='/img/bg-gradient-d.svg' className='object-cover w-[120%]' />
						</div>
						<ul className='flex'>
							<OneSaveur
								saveur='s5'
								side='left'
								title='Bacon fumé'
								text='Un goût de porc pour honorer nos hélevages made in France'
							/>
							<OneSaveur
								saveur='s6'
								side='left'
								title='France'
								text='Suçotez la république avec cet étendard bleu blanc rouge'
							/>
							<OneSaveur
								saveur='s7'
								side='right'
								title='Jus de Mynthos'
								text='Profitez du goût concentré de la première traîte du matin'
							/>
							<OneSaveur
								saveur='s8'
								side='right'
								title='Montazac et Torez'
								text="Pour retrouver le goût d'un vin unique"
							/>
						</ul>
						<div className='-mt-4 h-24 flex items-end overflow-hidden'>
							<img src='/img/bg-gradient-d.svg' className='object-cover w-full' />
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

const OneSaveur = ({ saveur, side, title, text }) => {
	return (
		<li className='relative flex-1 group'>
			<img
				src={`/img/saveurs/${saveur}.png`}
				className='relative z-10 mx-auto translate-y-3 group-hover:-translate-y-4  duration-500 ease-out'
			/>
			<img
				src={`/img/Ombre.svg`}
				className='mx-auto blur-sm scale-[0.6] group-hover:scale-[0.8] duration-500 ease-out'
			/>
			<div
				className={`absolute min-h-32 z-20 bg-beige-light -top-40 w-[240px] p-5 border-brown-dark border duration-500 hidden group-hover:block ${
					side === "left" ? "left-10" : "right-10"
				}`}
			>
				<h3>{title}</h3>
				<p>{text}</p>
				{side === "left" ? (
					<img src='/img/tige.svg' className='absolute rotate-[30deg] -bottom-[41px] left-10 h-24' />
				) : (
					<img src='/img/tige.svg' className='absolute -rotate-[30deg] -bottom-[41px] right-10 h-24' />
				)}
			</div>
		</li>
	)
}

const VerticalLines = () => {
	return (
		<>
			<div className='fixed left-1/2 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/50' />
			<div className='fixed left-6 translate-x-1/2 w-[2px] h-full mx-auto bg-beige/50' />
			<div className='fixed right-6 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/50' />
		</>
	)
}
