export const Header = () => {
	const scrollDown = () => {
		const documentHeight = document.documentElement.scrollHeight
		const viewportHeight = window.innerHeight
		const scrollPosition = documentHeight - viewportHeight - 1300

		window.scrollTo({
			top: scrollPosition,
			behavior: "smooth",
		})
	}

	return (
		<header className='sticky top-0 z-[41] w-full bg-transparent'>
			<div className='flex px-5 py-3 mt-2 mx-auto justify-between items-center h-16 max-w-[1440px]'>
				<button className='h-full'>
					<img src='/icon/logo-01.svg' className='h-full' />
				</button>
				<button
					onClick={scrollDown}
					className='bg-brown text-beige py-2 px-6 bg-right hover:bg-left duration-1000'
					style={{
						backgroundImage: `url(/icon/Colors-2.svg)`,
						backgroundSize: "500%",
						backgroundRepeat: "no-repeat",
					}}
				>
					Acheter
				</button>
			</div>
		</header>
	)
}
