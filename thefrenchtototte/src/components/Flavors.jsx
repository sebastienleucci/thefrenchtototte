export const Flavors = () => {
	return (
		<section className='z-10 flex flex-col mt-44 mb-64 w-full mx-auto px-5'>
			<ul className='flex'>
				<OneSaveur
					saveur='s1'
					side='left'
					title='Fraise'
					text='Une fraise française cueillie dans nos chères régions'
				/>
				<OneSaveur saveur='s2' side='left' title='Menthe' text='Pour une haleine fraiche avant vos reunions' />
				<OneSaveur saveur='s3' side='right' title='Bubble Gum' text='Un gout sucré pour retourner en enfance' />
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
			<div className='mt-7 px-5 flex flex-wrap max-w-96 mx-auto'>
				<div className='flex justify-between w-full'>
					<div className='flex-1'>
						<h4 className='font-gustavo font-bold text-brown-dark text-[4rem]'>30</h4>
						<p className="text-sm">
							Saveurs <br /> disponibles
						</p>
					</div>
					<div className='flex-1 pl-12'>
						<h4 className='font-gustavo font-bold text-brown-dark text-[4rem]'>11</h4>
						<p className="text-sm">
							Vertus
							<br /> medicinales
						</p>
					</div>
				</div>
				<p className=' mt-10 leading-7'>
					Laissez-vous tenter par les saveurs des différents plugs et
					<b className='text-brown-dark'> decouvrez un monde de delices</b> pour chaque envie.
				</p>
			</div>
		</section>
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
