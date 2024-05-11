export const Mynthos = () => {
	return (
		<section className='flex flex-col sm:flex-row px-[60px] max-w-[780px] z-10 mt-48 gap-10 sm:gap-20'>
			<img src='/img/Mynthos.png' className='flex-1w-52 m-auto' />
			<div className='flex flex-col flex-1'>
				<h1 className='mb-3 text-5xl leading-[2.7rem] text-brown-dark '>
					le jus de <br /> mynthos
				</h1>
				<p className='text-sm border border-brown-dark w-max px-3 py-[2px]'>Collaboration exclusive</p>
				<p className='mt-5 leading-7'>
					Découvrez l'exclusivité : la fusion inédite entre
					<b className='text-brown-dark'> Le Jus de Mynthos </b> et
					<b className='font-tartuffo text-brown-dark'> the french tototte® </b>, offrant un goût rare et
					recherché. Une collaboration qui révèle l'essence de l'excellence et de l'originalité, à savourer
					sans plus attendre.
				</p>
			</div>
		</section>
	)
}
