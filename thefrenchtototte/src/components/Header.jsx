export const Header = () => {
	return (
		<header className='sticky top-0 z-50 w-full bg-transparent'>
			<div className="flex px-5 py-3 mt-2 mx-auto justify-between items-center h-16 max-w-[1440px]">
				<button className='h-full'>
					<img src='/icon/logo-01.svg' className='h-full' />
				</button>
				<button className='bg-brown text-beige py-2 px-6'>Acheter</button>
			</div>
		</header>
	)
}
