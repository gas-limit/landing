"use client";

import Card from "@/components/custom/Card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function ProtocolsPanel() {
	const [duration, setDuration] = useState(TIME.FAST_DURATION);
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
		<>
			<motion.div
				className="absolute left-0 flex gap-4"
				style={{ x: xTranslation }}
				ref={ref}
				onHoverStart={() => {
					setMustFinish(true);
					setDuration(TIME.SLOW_DURATION);
				}}
				onHoverEnd={() => {
					setMustFinish(true);
					setDuration(TIME.FAST_DURATION);
				}}
			>
				{[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
					<Card image={`/assets/images/proto/${item}.png`} key={idx} />
				))}
			</motion.div>
		</>
	);
}
