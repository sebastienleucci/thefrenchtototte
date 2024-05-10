export const Spotify = () => {
	return (
		<section className='flex flex-col px-5 mt-52 z-10'>
			<div className='relative flex justify-center w-full rounded-xl border border-brown-dark overflow-hidden mix-blend-multiply'>
				<video type='video/mp4' src='/video/spotifyvideo.mp4'  autoPlay loop muted />
			</div>
			<div className='px-10'>
				<h1 className='mt-10 mb-8 text-5xl leading-[2.7rem] text-brown-dark '>
					sucotez vos <br /> titres <br /> preferes
				</h1>
				<img src='/img/btn-spotify.svg' />
				<p className='text-sm mt-1'>En partenariat exclusif avec Spotify</p>
				<p className='mt-5 leading-7'>
					En connectant votre tototte à votre smartphone par la technologie bluetooth,{" "}
					<b className='text-brown-dark'>dégustez vos morceaux</b> et vos vidéos préférées directement dans
					votre bouche
				</p>
			</div>
		</section>
	)
}
