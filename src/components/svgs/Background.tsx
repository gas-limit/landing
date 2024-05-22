"use client";

import { useMemo } from "react";

export const Background: React.FC<
	Readonly<{
		children?: React.ReactNode;
	}>
> = ({ children }) => {
	const TopMemo = useMemo(() => <Top className="top-0 left-0" />, []);
	const BottomMemo = useMemo(
		() => <Bottom className="bottom-0 h-screen" />,
		[],
	);

	return (
		<>
			{TopMemo}
			{BottomMemo}
		</>
	);
};

const Top: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<>
		<svg
			width="1440"
			height="1568"
			viewBox="0 0 1440 1568"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				style={{ mixBlendMode: "color-dodge" }}
				filter="url(#filter0_f_234_11)"
			>
				<circle
					cx="580.321"
					cy="256.321"
					r="629"
					fill="url(#paint0_radial_234_11)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_234_11"
					x="-730.579"
					y="-1054.58"
					width="2621.8"
					height="2621.8"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="340.95"
						result="effect1_foregroundBlur_234_11"
					/>
				</filter>
				<radialGradient
					id="paint0_radial_234_11"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(620.202 281.26) rotate(149.592) scale(830.299 1619.91)"
				>
					<stop stop-color="#328270" />
					<stop offset="1" stop-color="#4C246E" />
				</radialGradient>
			</defs>
		</svg>
	</>
);

const Bottom: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<>
		<svg
			width="1440"
			height="3197"
			viewBox="0 0 1440 3197"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_df_234_9)">
				<path
					d="M1085.68 3401.24C1455.02 2976.58 987.309 -634.948 1356.65 -210.289C1709.55 195.452 1709.55 820.933 1356.65 1226.67C987.309 1651.33 174.579 1918.67 -194.767 1494.01C-547.659 1088.27 732.785 3806.99 1085.68 3401.24Z"
					fill="url(#paint0_linear_234_9)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_df_234_9"
					x="-1656.08"
					y="-1645.33"
					width="4677.8"
					height="6488.4"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_234_9"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_234_9"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="700.2"
						result="effect2_foregroundBlur_234_9"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_234_9"
					x1="1585.28"
					y1="721.243"
					x2="513.371"
					y2="2142.78"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#328170" />
					<stop offset="1" stop-color="#4C246E" />
				</linearGradient>
			</defs>
		</svg>
	</>
);
