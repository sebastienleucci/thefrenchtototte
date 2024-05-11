export const VerticalLines = () => {
	return (
		<>
			<div className='fixed left-1/2 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='fixed left-6 lg:left-52 translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='fixed right-6 lg:right-52 -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='hidden 2xl:block fixed left-[30%] translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
			<div className='hidden 2xl:block fixed right-[30%] -translate-x-1/2 w-[2px] h-full mx-auto bg-beige/30' />
		</>
	)
}