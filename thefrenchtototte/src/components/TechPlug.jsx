export const TechPlug = () => {
	const scrollDown = () => {
		const targetScrollY = window.scrollY + 700
		window.scrollTo({
			top: targetScrollY,
			behavior: "smooth",
		})
	}
	return (
		<section className='relative flex flex-col justify-center mt-24 mx-auto w-full'>
			<div className='relative w-full max-w-[720px] mx-auto -mb-20 md:-mb-44'>
				<div className='absolute h-[40%] left-0 top-0 bg-gradient-to-r from-beige-light to-transparent w-20 z-20' />
				<div className='absolute h-[40%] right-0 top-0 bg-gradient-to-l from-beige-light to-transparent w-20 z-20' />
				<img type='video/mp4' src='/img/plug.gif' className='relative z-10' />
				<img src='/img/bg-gradient.svg' className='absolute top-36' />
			</div>
			<div className='relative -mt-20 px-10 pt-20 sm:pt-32 md:pt-44 bg-gradient-to-b from-beige to-transparent'>
				<div className='mx-auto max-w-[720px] flex flex-col'>
					<h1 className='mb-5 text-5xl leading-[2.7rem] text-brown-dark '>
						technologie <br /> plug'n'tote
					</h1>
					<div className='flex flex-col md:flex-row gap-7'>
						<p className='flex-1 leading-7'>
							La tototte est équipée de la <b className='text-brown-dark'>technologie plug'n'tote</b>,
							permettant de changer de plug à volonté, offrant ainsi un accès à une
							<b className='text-brown-dark'> gamme infinie de saveurs de suçotage</b> pour satisfaire
							tous les goûts.
						</p>
						<p className='flex-1 leading-7'>
							Cette technologie vous permet de changer en un clin d’œil de saveur pour
							<b className='text-brown-dark'> voyager du bout des lèvres.</b>
						</p>
					</div>
				</div>
			</div>
			<button
				onClick={scrollDown}
				className='group font-gustavo font-medium text-brown pt-2 px-6 mt-16 max-w-72 mx-auto flex flex-col items-center'
			>
				<p>Decouvrir les saveurs</p>
				<div className='mt-2 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-brown-dark to-transparent duration-300' />
			</button>
			<div className='w-[2px] rounded h-96 mx-auto bg-gradient-to-b from-brown to-transparent' />
		</section>
	)
}
