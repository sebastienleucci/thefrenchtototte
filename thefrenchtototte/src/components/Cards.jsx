export const Cards = () => {
	return (
		<section className='z-10 flex flex-wrap justify-center gap-5 mx-auto px-5'>
			<div className='min-w-72 max-w-96 flex-1 rounded-xl overflow-hidden bg-gradient-to-t from-blue to-white'>
				<div className='aspect-[5/4] w-full'>
					<img src='/img/tot-big.png' className='object-cover -translate-x-24 translate-y-16 scale-110' />
				</div>
				<div className='m-6 mt-0'>
					<h2 className=' text-4xl mb-3'>élégante et sophistiquée</h2>
					<p className='w-full'>
						Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante
					</p>
				</div>
			</div>
			<div className='min-w-72 max-w-96 flex-1 rounded-xl overflow-hidden bg-[#eeeeee]'>
				<div className='relative aspect-[5/4] w-full overflow-hidden'>
					<img src='/img/plug-1.png' className='object-cover scale-150' />
				</div>
				<div className='m-6 mt-0'>
					<h2 className=' text-4xl mb-3'>personnalisable</h2>
					<p className='w-full'>
						Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style
						personnel
					</p>
				</div>
			</div>
			<div className='min-w-72 max-w-96 flex-1 rounded-xl overflow-hidden bg-gradient-to-r from-blue via-white to-[#fbdedc]'>
				<div className='relative aspect-[5/4] flex justify-center items-center w-full overflow-hidden'>
					<img src='/img/tot-fr.png' className='object-cover w-4/5' />
				</div>
				<div className='m-6 mt-0'>
					<h2 className=' text-4xl mb-3'>made in france</h2>
					<p className='w-full'>
						Savoir-faire français pour une expérience de suçotage authentique et exceptionnelle
					</p>
				</div>
			</div>
			<div className='min-w-72 max-w-96 flex-1 rounded-xl overflow-hidden bg-gradient-to-t from-beige to-white'>
				<div className='m-6 mb-0'>
					<h2 className=' text-4xl mb-3'>innovante</h2>
					<p className='w-full'>
						Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
					</p>
				</div>
				<div className='aspect-[5/4] w-full'>
					<img
						src='/img/tot-plug.png'
						className='object-cover -translate-x-5 translate-y-12 -rotate-12 scale-110'
					/>
				</div>
			</div>
			<div className='min-w-72 max-w-96 flex-1 rounded-xl overflow-hidden bg-blue'>
				<div className='m-6 mb-0'>
					<h2 className=' text-4xl mb-3'>savoureuse</h2>
					<p className='w-full'>
						Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et
						immersive.
					</p>
				</div>
				<div className='aspect-[5/4] w-full'>
					<img
						src='/img/plug-choose.png'
						className='object-cover scale-[2.5] translate-x-44 translate-y-16'
					/>
				</div>
			</div>
			<div className='min-w-72 max-w-96 flex-1 h-min bg-beige rounded-xl '>
				<div className='m-6 mb-0 flex justify-between items-start'>
					<h2 className='font-bold text-2xl mb-3'>
						hébergement <br /> 100% français
					</h2>
					<img src='/icon/france.svg' className='w-6' />
				</div>
				<p className='m-6 mt-0 text-sm'>
					Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et
					immersive.
				</p>
			</div>
		</section>
	)
}
