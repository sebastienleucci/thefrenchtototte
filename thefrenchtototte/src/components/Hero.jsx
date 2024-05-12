import React, { useState, useEffect, useRef } from "react"

export const Hero = () => {
	const [timerState, setTimerState] = useState(true)
	const intervalRef = useRef(null)

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTimerState((prevState) => !prevState)
		}, 5000)

		return () => {
			clearInterval(intervalRef.current)
		}
	}, [])

	const scrollDown = () => {
		const targetScrollY = window.scrollY + 1000
		window.scrollTo({
			top: targetScrollY,
			behavior: "smooth",
		})
	}

	return (
		<section className='relative flex flex-col'>
			<div className='relative flex justify-center w-[100dvw]'>
				<div className='z-40 absolute flex justify-between top-0 w-full h-full min-w-[2140px] max-w-[2140px] pointer-events-none'>
					<div className='h-full left-0 bg-gradient-to-r from-beige-light to-transparent w-20' />
					<div className='h-full right-0 bg-gradient-to-l from-beige-light to-transparent w-20' />
				</div>
				<video
					type='video/mp4'
					src='/video/herovideo.mp4'
					className='min-w-[1080px] w-full max-w-[2140px]'
					autoPlay
					loop
					muted
				/>
				<div className='absolute z-10 w-full h-48 bottom-0 bg-gradient-to-t from-beige-light to-transparent' />
				<div className='absolute z-10 bottom-0 left-6 lg:left-52 translate-x-1/2 w-[2px] h-1/2 mx-auto bg-gradient-to-t from-beige/30 to-transparent' />
				<div className='absolute z-10 bottom-0 right-6 lg:right-52 -translate-x-1/2 w-[2px] h-1/2 mx-auto bg-gradient-to-t from-beige/30 to-transparent' />
				<div className='hidden 2xl:block absolute z-10 bottom-0 left-[30%] translate-x-1/2 w-[2px] h-1/2 mx-auto bg-gradient-to-t from-beige/30 to-transparent' />
				<div className='hidden 2xl:block absolute z-10 bottom-0 right-[30%] -translate-x-1/2 w-[2px] h-1/2 mx-auto bg-gradient-to-t from-beige/30 to-transparent' />
			</div>
			<div className='absolute z-20 top-[32rem] min-[2048px]:top-[44rem] flex flex-col w-full items-center'>
				<div className='flex items-start'>
					<h1 className='text-3xl whitespace-nowrap '>the french tototte</h1>
					<img src='/icon/r.svg' className='w-[6px] mt-1' />
				</div>
				<div className='flex flex-col items-center'>
					<img src='/icon/france.svg' className='mt-5 mb-5' />
					<h2
						className={`w-full text-center text-5xl md:text-[4rem] leading-[2.7rem] md:leading-[4rem] text-transparent ${
							timerState ? "bg-left" : "bg-right"
						} duration-[2000]`}
						style={{
							backgroundImage: `url(/icon/Colors-1.svg)`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							WebkitBackgroundClip: "text",
							MozBackgroundClip: "text",
						}}
					>
						pour ceux qui osent <br /> etre differents
					</h2>
					<button
						onClick={scrollDown}
						className='group z-50 font-gustavo font-medium text-brown pt-2 px-6 mt-16 max-w-72 mx-auto flex flex-col items-center pointer-events-auto'
					>
						<p>Decouvrir</p>
						<div className='mt-2 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-brown-dark to-transparent duration-300' />
					</button>
				</div>
				<div className='w-[2px] h-96 mx-auto rounded bg-gradient-to-b from-brown to-transparent' />
			</div>
            <div className='absolute z-20 top-[34rem] flex flex-col w-full items-center'></div>
		</section>
	)
}
