import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useState } from "react"
import Slider from "react-slick"

export const BuyTototte = () => {
	const [activeFinition, setActiveFinition] = useState(0)
	const [activeOrnament, setActiveOrnament] = useState(0)

	return (
		<>
			<section className='flex flex-col z-10 mt-52 max-w-full'>
				<h1 className='px-[60px] mt-10 text-5xl leading-[2.7rem] text-brown-dark '>
					personnalisez votre tototte
				</h1>
				<p className='px-[60px] mt-5 mb-10 leading-7'>
					Vous allez créer la tototte idéale pour vous. À chacun son expérience, à chacun sa tototte.
				</p>
			</section>
			<div className='w-[100dvw] z-20 overflow-hidden sticky top-0'>
				<SimpleSlider>
					<img src={"/img/colors/gr1.png"} loading='lazy' fetchpriority='low' />
					<img src={"/img/colors/gr2.png"} loading='lazy' fetchpriority='low' />
					<img src={"/img/colors/gr3.png"} loading='lazy' fetchpriority='low' />
				</SimpleSlider>
			</div>
			<section className='relative flex flex-col z-10 max-w-full'>
				<div className='flex flex-col justify-start px-10 mt-14'>
					<h3 className='text-3xl text-brown-dark'>finition</h3>
					<p className='text-sm mb-5'>Choisissez votre favorite</p>
					<ButtonColors
						activeIndex={activeFinition}
						setActiveIndex={setActiveFinition}
						colors={["bg-[#f1d3c6]", "bg-[#c4d1f0]", "bg-[#e7e7e7]", "bg-[#747277]"]}
					/>
				</div>
				<div className='flex flex-col justify-start px-10 mt-14'>
					<h3 className='text-3xl text-brown-dark'>ornement</h3>
					<p className='text-sm mb-5'>Choisissez votre pierre precieuse</p>
					<ButtonColors
						activeIndex={activeOrnament}
						setActiveIndex={setActiveOrnament}
						colors={["bg-[#0077d4]", "bg-[#32debf]", "bg-[#fc5ba8]", "bg-[#293937]"]}
					/>
				</div>
				<div className='flex flex-col justify-start px-10 mt-14'>
					<h3 className='text-3xl text-brown-dark'>pack saveur</h3>
					<p className='text-sm mb-5'>Choisissez votre pack de saveurs</p>
					<ButtonsPack />
				</div>
			</section>
		</>
	)
}

function ButtonColors({ activeIndex, setActiveIndex, colors }) {
	const handleClick = (index) => {
		setActiveIndex(index)
	}

	const isActive = (index) => {
		return activeIndex === index ? true : false
	}
	return (
		<div className='flex gap-4'>
			<button
				className={`size-10 aspect-square rounded-full p-[3px] border border-${isActive(0) ? "brown-dark" : "transparent"} `}
				onClick={() => handleClick(0)}
			>
				<div
					className={`${colors[0]} w-full h-full rounded-full ${
						isActive(0)
							? "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"
							: "shadow-[inset_-2px_2px_2px_rgba(0,0,0,0.1)]"
					}`}
				/>
			</button>
			<button
				className={`size-10 aspect-square rounded-full p-[3px] border border-${isActive(1) ? "brown-dark" : "transparent"} `}
				onClick={() => handleClick(1)}
			>
				<div
					className={`${colors[1]} w-full h-full rounded-full ${
						isActive(1)
							? "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"
							: "shadow-[inset_-2px_2px_2px_rgba(0,0,0,0.1)]"
					}`}
				/>
			</button>
			<button
				className={`size-10 aspect-square rounded-full p-[3px] border border-${isActive(2) ? "brown-dark" : "transparent"} `}
				onClick={() => handleClick(2)}
			>
				<div
					className={`${colors[2]} w-full h-full rounded-full ${
						isActive(2)
							? "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"
							: "shadow-[inset_-2px_2px_2px_rgba(0,0,0,0.1)]"
					}`}
				/>
			</button>
			<button
				className={`size-10 aspect-square rounded-full p-[3px] border border-${isActive(3) ? "brown-dark" : "transparent"} `}
				onClick={() => handleClick(3)}
			>
				<div
					className={`${colors[3]} w-full h-full rounded-full ${
						isActive(3)
							? "shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"
							: "shadow-[inset_-2px_2px_2px_rgba(0,0,0,0.1)]"
					}`}
				/>
			</button>
		</div>
	)
}

function ButtonsPack() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleClick = (index) => {
		setActiveIndex(index)
	}

	const isActive = (index) => {
		return activeIndex === index ? true : false
	}

	return (
		<div className='flex flex-col gap-4'>
			<button
				className={`flex justify-between items-center border ${
					isActive(0) ? "border-brown-dark" : "border-brown-light/50"
				} p-4 hover:bg-white/50`}
				onClick={() => handleClick(0)}
			>
				<div className='flex flex-col text-left'>
					<h6 className='text-xl font-gustavo font-bold text-brown-dark -mb-1'>Pack Starter</h6>
					<p className='text-sm'>3 saveurs de découverte</p>
				</div>
				<p className='text-brown-dark'>Offert</p>
			</button>
			<button
				className={`flex justify-between items-center border ${
					isActive(1) ? "border-brown-dark" : "border-brown-light/50"
				} p-4 hover:bg-white/50`}
				onClick={() => handleClick(1)}
			>
				<div className='flex flex-col text-left'>
					<h6 className='text-xl font-gustavo font-bold text-brown-dark -mb-1'>Pack Suçoteur</h6>
					<p className='text-sm'>6 saveurs</p>
				</div>
				<p className='text-brown-dark'>29€</p>
			</button>
			<button
				className={`flex justify-between items-center border ${
					isActive(2) ? "border-brown-dark" : "border-brown-light/50"
				} p-4 hover:bg-white/50`}
				onClick={() => handleClick(2)}
			>
				<div className='flex flex-col text-left'>
					<h6 className='text-xl font-gustavo font-bold text-brown-dark -mb-1'>Pack Suçoteur Pro</h6>
					<p className='text-sm'>12 saveurs + 1 jus de Mynthos</p>
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-brown-light line-through text-[0.8rem]'>60€</p>
					<p className='text-brown-dark'>49€</p>
				</div>
			</button>
		</div>
	)
}

function SimpleSlider({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: null,
		nextArrow: null,
		appendDots: (dots) => (
			<div>
				<ul style={{ marginTop: "-60px" }}> {dots} </ul>
			</div>
		),
	}
	return <Slider {...settings}>{children}</Slider>
}
