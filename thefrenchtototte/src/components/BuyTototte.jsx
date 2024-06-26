import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import { colors } from "../assets/colors.json"

export const BuyTototte = () => {
	const [activeFinition, setActiveFinition] = useState(0)
	const [activeOrnament, setActiveOrnament] = useState(0)

	return (
		<>
			<section className='md:hidden flex flex-col z-20 pt-52 max-w-[full] bg-beige-light'>
				<h1 className='relative z-10 px-[60px] mt-10 text-5xl leading-[2.7rem] text-brown-dark '>
					personnalisez votre tototte
				</h1>
				<p className='px-[60px] mt-5 mb-10 leading-7'>
					Vous allez créer la tototte idéale pour vous. À chacun son expérience, à chacun sa tototte.
				</p>
			</section>
			<div className='max-w-[100dvw] z-20 md:z-50 overflow-hidden sticky top-0 bg-transparent md:pointer-events-none'>
				<div className='mx-auto max-w-[1400px] md:mt-28'>
					<div className='md:w-1/2 lg:w-2/3 md:ml-5 lg:-ml-5'>
						<div className='md:w-[420px] lg:w-[620px] 2xl:w-[940px] mx-auto md:rounded-lg md:overflow-hidden md:pointer-events-auto cursor-pointer'>
							<SimpleSlider {...{ colors, activeFinition, activeOrnament }}></SimpleSlider>
						</div>
					</div>
				</div>
			</div>
			<section className='flex flex-col z-10 max-w-full bg-beige-light pb-32'>
				<div className='relative flex flex-col md:w-1/2 lg:w-1/3 2xl:w-[26rem] md:left-1/2 lg:left-[63%] md:z-20 md:pl-5 lg:pl-0 2xl:pl-10 md:-mt-[17rem] lg:-mt-[24rem] 2xl:-mt-[35rem]'>
					<div className='hidden md:flex flex-col px-10 max-w-full'>
						<h1 className='relative z-10 mt-10 text-5xl leading-[2.7rem] text-brown-dark '>
							personnalisez votre tototte
						</h1>
						<p className='mt-5 mb-10 leading-7'>
							Vous allez créer la tototte idéale pour vous. À chacun son expérience, à chacun sa tototte.
						</p>
					</div>
					<div className='flex flex-col justify-start px-10 mt-14'>
						<h3 className='text-3xl text-brown-dark'>finition</h3>
						<p className='text-sm mb-5'>Choisissez votre favorite</p>
						<ButtonColors
							activeIndex={activeFinition}
							setActiveIndex={setActiveFinition}
							colors={["bg-[#f1d3c6]", "bg-[#c4d1f0]", "bg-[#e7e7e7]", "bg-[#747277]"]}
						/>
					</div>
					<div className='flex flex-col justify-start px-10 mt-14 '>
						<h3 className='text-3xl text-brown-dark'>ornement</h3>
						<p className='text-sm mb-5'>Choisissez votre pierre precieuse</p>
						<ButtonColors
							activeIndex={activeOrnament}
							setActiveIndex={setActiveOrnament}
							colors={["bg-[#0077d4]", "bg-[#32debf]", "bg-[#fc5ba8]", "bg-[#293937]"]}
						/>
					</div>
					<div className='flex flex-col justify-start px-10 mt-14 lg:pr-0'>
						<h3 className='text-3xl text-brown-dark'>pack saveur</h3>
						<p className='text-sm mb-5'>Choisissez votre pack de saveurs</p>
						<ButtonsPack />
					</div>
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
				className={`size-10 aspect-square rounded-full p-[3px] border ${
					isActive(0) ? "border-brown-dark" : "border-transparent"
				} `}
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
				className={`size-10 aspect-square rounded-full p-[3px] border ${
					isActive(1) ? "border-brown-dark" : "border-transparent"
				} `}
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
				className={`size-10 aspect-square rounded-full p-[3px] border ${
					isActive(2) ? "border-brown-dark" : "border-transparent"
				} `}
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
				className={`size-10 aspect-square rounded-full p-[3px] border ${
					isActive(3) ? "border-brown-dark" : "border-transparent"
				} `}
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
				} p-4 hover:bg-white/50 bg-beige-light`}
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
				} p-4 hover:bg-white/50 bg-beige-light`}
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
				} p-4 hover:bg-white/50 bg-beige-light`}
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

function SimpleSlider({ colors, activeFinition, activeOrnament }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <SampleArrow />,
		nextArrow: <SampleArrow />,
		appendDots: (dots) => (
			<div>
				<ul style={{ marginTop: "-60px" }}> {dots} </ul>
			</div>
		),
	}

	const [urlObject, setUrlObject] = useState(["/img/colors/gb1.png", "/img/colors/gb2.png", "/img/colors/gb3.png"])

	useEffect(() => {
		setUrlObject(colors[activeFinition].ornament[activeOrnament].url)
	}, [activeFinition, activeOrnament])

	return (
		<Slider {...settings}>
			{urlObject.map((url, index) => (
				<img key={index} src={url} loading='lazy' fetchpriority='low' />
			))}
		</Slider>
	)
}

function SampleArrow(props) {
	const { className, style, onClick } = props
	return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />
}
