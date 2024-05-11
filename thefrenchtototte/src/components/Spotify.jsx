export const Spotify = () => {
	return (
		<section className='flex flex-col items-center px-5 mt-52 z-10'>
			<div className='relative flex justify-center w-full max-w-[720px] rounded-xl border border-brown-dark overflow-hidden mix-blend-multiply'>
				<video type='video/mp4' src='/video/spotifyvideo.mp4' autoPlay loop muted />
			</div>
			<div className='flex flex-col px-10 md:flex-row  max-w-[720px]'>
				<h1 className='flex-1 mt-10 mb-8 text-5xl leading-[2.7rem] text-brown-dark '>
					sucotez vos <br /> titres <br /> preferes
				</h1>
				<div className='flex-1 flex flex-col md:mt-12'>
					<img src='/img/btn-spotify.svg' className='max-w-36' />
					<p className='text-sm mt-1'>En partenariat exclusif avec Spotify</p>
					<p className='mt-5 leading-7'>
						En connectant votre tototte à votre smartphone par la technologie bluetooth,{" "}
						<b className='text-brown-dark'>dégustez vos morceaux</b> et vos vidéos préférées directement
						dans votre bouche
					</p>
				</div>
			</div>
		</section>
	)
}
