export const Hero = () => {
	return (
		<section className='flex flex-col'>
			<div className='relative flex justify-center w-[100dvw]'>
				<video type='video/mp4' src='/video/herovideo.mp4' className='min-w-[1080px]' autoPlay loop muted />
				<div className='absolute z-10 w-full h-48 bottom-0 bg-gradient-to-t from-beige-light to-transparent' />
				<div className='absolute z-10 bottom-0 left-6 translate-x-1/2 w-[2px] h-1/2 mx-auto bg-gradient-to-t from-beige/50 to-transparent' />
				<div className='absolute z-10 bottom-0 right-6 -translate-x-1/2 w-[2px] h-1/2 mx-auto bg-gradient-to-t from-beige/50 to-transparent' />
			</div>
			<div className='relative z-20 -mt-20 flex flex-col w-full items-center'>
				<div className='flex items-start'>
					<h1 className='text-3xl whitespace-nowrap '>the french tototte</h1>
					<img src='/icon/r.svg' className='w-[6px] mt-1' />
				</div>
				<div className='flex flex-col items-center bg-gradient-to-t from-beige-light via-beige-light to-transparent'>
					<img src='/icon/france.svg' className='mt-5 mb-5' />
					<h2 className='w-full  text-center text-4xl'>
						pour ceux qui osent <br /> etre differents
					</h2>
					<button className=' font-gustavo py-2 px-6'>decouvrir</button>
				</div>
				<div className='w-[2px] h-96 mx-auto rounded bg-gradient-to-b from-brown to-transparent' />
			</div>
		</section>
	)
}
