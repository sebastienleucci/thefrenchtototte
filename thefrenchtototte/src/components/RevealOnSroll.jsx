import React, { useEffect, useRef, useState } from "react"

export const RevealOnScroll = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const scrollObserver = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true)
				scrollObserver.unobserve(entry.target)
			}
		})

		scrollObserver.observe(ref.current)

		return () => {
			if (ref.current) {
				scrollObserver.unobserve(ref.current)
			}
		}
	}, [])

	const classes = `transition-all duration-[1500ms] delay-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0  translate-y-32"}`

	return (
		<div ref={ref} className={classes}>
			{children}
		</div>
	)
}
