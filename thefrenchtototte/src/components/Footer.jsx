export const Footer = () => {
	return (
		<footer className='sticky z-[45] flex flex-col px-5 pt-16 w-[100dvw] bg-brown-dark overflow-hidden'>
			<div className='relative md:w-1/2 lg:w-1/3 md:ml-auto md:pl-16 lg:pr-10 lg:pl-3 2xl:pr-44'>
				<div className='flex flex-col mx-auto max-w-96 2xl:max-w-none 2xl:w-[26rem]'>
					<h6 className='text-3xl text-beige mb-3'>votre panier est prêt</h6>
					<p className='text-sm'>Récapitulatif de votre commande</p>
					<div className='mt-10 flex justify-between text-sm text-beige'>
						<div>
							<p className='text-beige'>1 x thefrenchtototte</p>
							<p className='text-beige ml-2'> + Finition argent</p>
							<p className='text-beige ml-2'> + Orenement obsidiennes</p>
						</div>
						<p className='text-beige'>99.00 €</p>
					</div>
					<div className='mt-4 flex justify-between text-sm text-beige'>
						<p className='text-beige'>x1 Pack Suçoteur Pro</p>
						<p className='text-beige'>49.00 €</p>
					</div>
					<div className='mt-4 flex justify-between text-sm text-beige'>
						<p className='text-beige'>Livraison</p>
						<p className='text-beige'>Offerte</p>
					</div>
					<div className='mt-4 flex justify-between text-sm text-beige'>
						<p className='text-beige'>Prix</p>
						<p className='text-beige'>148.00 €</p>
					</div>
					<div className='mt-10 flex justify-between text-sm text-beige'>
						<p className='text-beige'>Retrait en magasin</p>
						<div className='flex gap-1'>
							<p className='text-beige'>Tototte Store Lille</p>
							<img src='/icon/chevron-down.svg' className='w-5' />
						</div>
					</div>
					<div className='mt-4 flex justify-between text-sm text-beige'>
						<p className='text-beige'>Commandez avant 17h</p>
						<div className='flex gap-1'>
							<p className='text-beige'>Livrer à 59000</p>
							<img src='/icon/Store.svg' className='w-5' />
						</div>
					</div>
					<button className='bg-beige/30  active:bg-beige/60 text-beige py-5 mt-10 mb-3'>
						Ajouter au panier
					</button>
					<p className='text-[0.55rem]'>
						The French Tototte est couverte par une garantie limitée contre les défauts de fabrication pour
						une période de 2 mois à compter de la date d'achat. Cette garantie ne couvre pas les dommages
						causés par une mauvaise utilisation, une négligence ou une modification non autorisée du
						produit. Dans les limites permises par la loi, thefrenchtototte décline toute responsabilité
						pour les dommages directs, indirects, spéciaux, accidentels ou consécutifs découlant de
						l'utilisation ou de l'incapacité d'utiliser thefrenchtototte, même si thefrenchtototte a été
						informée de la possibilité de tels dommages. En utilisant thefrenchtototte, l'utilisateur
						consent à la collecte et à l'utilisation de ses données conformément à la politique de
						confidentialité de thefrenchtototte. Les informations collectées peuvent inclure, mais ne sont
						pas limitées à, des données d'utilisation, des informations de localisation et des données
						personnelles, telles que définies dans ladite politique de confidentialité.
					</p>
				</div>
			</div>
			<div className='z-10 flex flex-col md:flex-row gap-5 mt-64 md:mt-36 mb-10 w-full max-w-[1440px] mx-auto'>
				<div className='flex flex-col gap-5 md:gap-3'>
					<div className='flex gap-5 '>
						<button>
							<img src='/icon/insta.svg' className='size-6' />
						</button>
						<button>
							<img src='/icon/yt.svg' className='size-6' />
						</button>
						<button>
							<img src='/icon/threads.svg' className='size-6' />
						</button>
						<button>
							<img src='/icon/in.svg' className='size-6' />
						</button>
						<button>
							<img src='/icon/xx.svg' className='size-6' />
						</button>
					</div>
					<div>
						<img src='/icon/logo-long.svg' />
					</div>
				</div>
				<div className='flex flex-col m-auto'>
					<p className='text-[0.7rem]'>
						Copyright © 2024 TheFrenchTototte. Tous droits réservés
						<span className='text-beige/20'>— Utilisation des cookies — Mention légales.</span>
					</p>
					<p className='text-[0.7rem] -mt-1'>
						Sur une idée originale d’Antoine Daniel, concept art par Tera Silver, 3D par Aurélien Thomas,
						logo par Baloprisonnier, 3D print par Lunath & Packaging par Illusion
					</p>
				</div>
			</div>
			<img src='/icon/picto.svg' className='absolute bottom-0 -left-32 scale-150 lg:scale-75 lg:-bottom-36' />
		</footer>
	)
}
