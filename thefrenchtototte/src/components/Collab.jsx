import { RevealOnScroll } from "./RevealOnSroll"

export const Collab = () => {
	return (
		<section className='flex flex-col px-[60px] z-10 mt-48 md:mb-20'>
			<h1 className='mt-10 mb-3 text-center text-5xl leading-[2.7rem] text-brown-dark '>
				ils ont suçoté, <br /> ils ont adoré
			</h1>
			<p className='mt-5 mx-auto text-center max-w-[460px] leading-7'>
				Nos totottes sont utilisées par les plus grands de ce monde et si vous voulez mon avis ce n’est pas un
				hasard
			</p>
			<div className='flex flex-wrap min-[1100px]:flex-nowrap justify-center gap-16 mt-16'>
				<div className='min-[1100px]:mt-28'>
					<RevealOnScroll>
						<Person
							img='bag'
							name='/Baghera Jones'
							platform='twitch'
							type='Streamer'
							text={
								<>
									J’ai arrêté de vape depuis que j’ai découvert
									<b className='font-tartuffo text-brown-dark'> the french tototte®</b>
								</>
							}
						/>
					</RevealOnScroll>
				</div>
				<div className='min-[1100px]:mt-60'>
					<RevealOnScroll>
						<Person
							img='jdg'
							name='/Joueur_du_Grenier'
							platform='youtube'
							type='Youtuber'
							text={
								<>
									J’ai commandé un pack pour toute la famille et même mon fils Légolas Son Goku adore
									sa
									<b className='font-tartuffo text-brown-dark'> the french tototte®</b>
								</>
							}
						/>
					</RevealOnScroll>
				</div>
				<div>
					<RevealOnScroll>
						<Person
							img='etoiles'
							name='/Etoiles'
							platform='twitch'
							type='Streamer'
							text={
								<>
									Grâce à <b className='font-tartuffo text-brown-dark'>the french tototte®</b> je
									régule mon taux d’insuline parfaitement et je n’achète plus de saumon ni de nutella
									!
								</>
							}
						/>
					</RevealOnScroll>
				</div>
			</div>
		</section>
	)
}

const Person = ({ img, name, platform, type, text }) => {
	return (
		<div className='flex flex-col items-center'>
			<img src={`/img/${img}.png`} />
			<h4 className='text-brown-dark mt-5 text-xl'>{name}</h4>
			<div className='flex gap-1 mt-1'>
				{platform == "twitch" && <img src='/icon/Twitch.svg ' />}
				{platform == "youtube" && <img src='/icon/YouTube.svg ' />}
				<p className='text-brown-dark text-sm '>{type}</p>
			</div>
			<p className='mt-5 mx-auto text-sm text-center max-w-80 leading-6'>{text}</p>
		</div>
	)
}
