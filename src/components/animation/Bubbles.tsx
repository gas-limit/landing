"use client";
export const Bubbles = () => {
	return (
		<>
			<div id="background-wrap">
				{Array.from({
					length: 10,
				}).map((i) => (
					<div key={i as number} className={`bubble x${i}`}></div>
				))}
			</div>
		</>
	);
};
