export const Cards = () => {
	return (
		<>
			{/* Mobile... */}
			<section className='lg:hidden z-20 flex flex-wrap justify-center gap-5 mx-auto px-5 pt-[40rem] md:pt-[24rem]'>
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
			{/* Desktop... */}
			<section className='hidden lg:flex flex-col z-20 max-w-[1024px] gap-5 mx-auto pt-[40rem] md:pt-[24rem]'>
				<div className='flex gap-5'>
					<div className='group flex flex-col justify-between min-w-96 rounded-xl overflow-hidden bg-gradient-to-t from-blue to-white group-hover:to-blue'>
						<div className='aspect-[5/4] w-full'>
							<img
								src='/img/tot-big.png'
								className='object-cover -translate-x-44 translate-y-28 scale-150 group-hover:scale-[1.6] group-hover:-translate-x-40 duration-300 ease-out'
							/>
						</div>
						<div className='m-6 mt-0'>
							<h2 className=' text-4xl mb-3 whitespace-nowrap'>élégante et sophistiquée</h2>
							<p className='w-full'>
								Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et
								élégante
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-5'>
						<div className='group flex w-full h-64 rounded-xl overflow-hidden bg-[#eeeeee]'>
							<div className='relative w-full overflow-hidden'>
								<img
									src='/img/plug-1.png'
									className='object-cover scale-[2] translate-y-7 group-hover:scale-[2.3] duration-300'
								/>
							</div>
							<div className='m-6 my-auto'>
								<h2 className=' text-4xl mb-3'>personnalisable</h2>
								<p className='w-full'>
									Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre
									style personnel
								</p>
							</div>
						</div>
						<div className='flex gap-5'>
							<div className='group min-w-72 max-w-96 h-72 rounded-xl flex flex-col justify-between overflow-hidden bg-gradient-to-r from-blue via-white to-[#fbdedc] duration-300 ease-in'>
								<div className='relative flex justify-center items-center w-full mt-10'>
									<img
										src='/img/tot-fr.png'
										className='object-cover w-4/5 -translate-x-1 group-hover:scale-110 group-hover:rotate-[-4deg] duration-300'
									/>
								</div>
								<div className='m-6 mt-0'>
									<h2 className='text-4xl mb-3'>made in france</h2>
									<p className='w-full'>
										Savoir-faire français pour une expérience de suçotage authentique et
										exceptionnelle
									</p>
								</div>
							</div>
							<div className='group min-w-72 max-w-72 h-72 rounded-xl overflow-hidden bg-gradient-to-t from-beige to-white'>
								<div className='m-6 mb-0'>
									<h2 className=' text-4xl mb-3'>innovante</h2>
									<p className='w-full'>
										Technologies de pointe offrant une expérience de suçotage révolutionnaire et
										inégalée.
									</p>
								</div>
								<div className='w-full'>
									<img
										src='/img/tot-plug.png'
										className='object-cover translate-x-12 -rotate-12 scale-125 group-hover:-translate-y-4 duration-300 ease-out'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex gap-5'>
					<div className='group flex-1 flex h-72 rounded-xl overflow-hidden bg-blue'>
						<div className='m-6 mb-0'>
							<h2 className=' text-4xl mb-3'>savoureuse</h2>
							<p className='w-full'>
								Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante
								et immersive.
							</p>
						</div>
						<div className='aspect-[5/4] w-full'>
							<img
								src='/img/plug-choose.png'
								className='object-cover scale-[3] translate-x-32 translate-y-24 group-hover:translate-x-12 duration-1000 ease-in-out'
							/>
						</div>
					</div>
					<div className='group max-w-72 min-w-72 flex flex-col bg-beige hover:bg-white rounded-xl p-6'>
						<img src='/icon/france.svg' className='w-6 origin-top group-hover:scale-y-[10] duration-300' />
						<div className='relative h-full z-10 -ml-1 bg-gradient-to-t from-beige group-hover:from-white via-beige group-hover:via-white to-transparent pointer-events-none ' />
						<div className='flex justify-between items-start'>
							<h2 className='font-bold text-2xl mb-3'>
								hébergement <br /> 100% français
							</h2>
						</div>
						<p className='text-sm'>
							Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et
							immersive.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
