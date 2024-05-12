import React, { useEffect, useState } from "react"

export const HeaderCenter = () => {
	const [scrollY, setScrollY] = useState(0)
	const [showElement, setShowElement] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setScrollY(scrollPosition)
			if (scrollPosition >= 900) {
				setShowElement(true)
			} else {
				setShowElement(false)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<div
			className={`hidden sticky md:flex items-start justify-center top-0 w-full z-40 pb-5 pointer-events-none duration-500 bg-gradient-to-b from-beige to-transparent ${
				showElement ? "opacity-100" : "opacity-0"
			}`}
		>
			<h1 className='text-3xl whitespace-nowrap pt-4'>the french tototte</h1>
			<img src='/icon/r.svg' className='w-[6px] mt-1 pt-4' />
		</div>
	)
}
