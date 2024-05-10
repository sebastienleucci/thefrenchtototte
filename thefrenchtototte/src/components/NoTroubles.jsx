export const NoTroubles = () => {
	return (
		<section className='relative flex flex-col justify-center mx-auto'>
			<div className='px-10'>
				<h1 className='mb-5 text-5xl leading-[2.7rem] text-brown-dark '>
					sucotez <br /> sans <br /> soucis
				</h1>
				<p className='leading-7'>
					La tototte offre une <b className='text-brown-dark'>autonomie impressionnante</b> de 50 heures de
					suçotage grâce à sa batterie au lithium, assurant ainsi
					<b className='text-brown-dark'> des heures de plaisir ininterrompu</b> pour encore plus de confort
					et de tranquillité.
				</p>
			</div>
			<img src='/img/tot-rot.png' className='-mt-5 scale-120 hover:rotate-[33deg] duration-500 ease-in-out' />
			<div className='ml-auto flex flex-col items-end px-10 -mt-20'>
				<h4 className='font-gustavo font-bold text-brown-dark text-[4rem]'>50h</h4>
				<p className='text-right text-sm'>
					de sucotage Bluetooth <br /> sans interruption
				</p>
			</div>
			<p className='ml-auto px-10 text-right leading-7 mt-14 max-w-96'>
				Grâce aux<b className='text-brown-dark '> technologies sans contact</b> profitez d’une recharge rapide
				sur son socle à induction
			</p>
		</section>
	)
}
