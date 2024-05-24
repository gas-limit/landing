"use client";

import { Card, Section, Title } from "@/components";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export const ProtocolsPanel = () => {
	const images = [
		"/assets/images/proto/1.png",
		"/assets/images/proto/2.png",
		"/assets/images/proto/3.png",
		"/assets/images/proto/4.png",
		"/assets/images/proto/5.png",
		"/assets/images/proto/6.png",
		"/assets/images/proto/7.png",
	];

	const [duration, setDuration] = useState<number>(25);
	const [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);

	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		const finalPosition = -width / 2 - 8;

		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}
		return controls?.stop;
	}, [rerender, xTranslation, duration, width]);
	return (
		<Section
			className={`
				flex flex-col justify-center items-center
				w-screen h-fit
				border border-red-400 mb-8 mt-20 max-w-screen-xl
			`}
		>
			<>
				<motion.div
					className={`
						left-0 flex gap-4 justify-center items-center
						max-w-screen-xl w-full h-[300px]
					`}
					style={{
						x: xTranslation,
					}}
					ref={ref}
					onHoverStart={() => {
						setMustFinish(true);
						setDuration(75);
					}}
					onHoverEnd={() => {
						setMustFinish(true);
						setDuration(25);
					}}
				>
					{[...images, ...images].map((item, idx: Index) => (
						<Card image={`${item}`} key={idx} name={""} />
					))}
				</motion.div>
			</>
		</Section>
	);
};
