export const TechPlug = () => {
	return (
		<section className='relative flex flex-col justify-center mt-24 mx-auto'>
			<img type='video/mp4' src='/img/plug.gif' className='relative z-10 w-full' />
			<img src='/img/bg-gradient.svg' className='absolute top-36' />
			<div className='relative -mt-20 px-10 pt-20 bg-gradient-to-t from-beige-light to-beige'>
				<h1 className='mb-5 text-5xl leading-[2.7rem] text-brown-dark '>
					technologie <br /> plug'n'tote
				</h1>
				<p className="leading-7">
					La tototte est équipée de la <b className='text-brown-dark'>technologie plug'n'tote</b>, permettant
					de changer de plug à volonté, offrant ainsi un accès à une
					<b className='text-brown-dark'> gamme infinie de saveurs de suçotage</b> pour satisfaire tous les
					goûts. <br />
					<br />
					Cette technologie vous permet de changer en un clin d’œil de saveur pour
					<b className='text-brown-dark'> voyager du bout des lèvres.</b>
				</p>
			</div>
			<button className='font-gustavo font-medium text-brown py-2 px-6 mt-6'>Decouvrir les saveurs</button>
			<div className='w-[2px] rounded h-96 mx-auto bg-gradient-to-b from-brown to-transparent' />
		</section>
	)
}
