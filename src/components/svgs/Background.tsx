"use client";
import { cn } from "@/lib";
import * as React from "react";

export const Background = React.memo(
	({
		className,
	}: {
		className?: string;
	}) => {
		return (
			<div
				className={cn(
					`
			absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center
			z-[-1]
			`,
					className,
				)}
			>
				<svg
					className="bg-transparent"
					width="5340"
					height="6360"
					viewBox="0 0 5340 6360"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ maxWidth: "100%", height: "auto" }}
				>
					<g filter="url(#filter0_df_234_9)">
						<path
							d="M2930.5 4947C2688.04 4903.9 4051.97 4440.15 3931.5 4081C3569.79 3002.61 2238.18 1220.07 3206.33 1415.5C3733.35 1521.89 3449.5 2292.89 3274.33 2801.21C2701.5 4463.5 2606 1999.5 2510.5 1549.5C2427.59 1158.81 830.999 1942 1722.91 3068.47C1800.72 3166.74 2716.08 2741.01 2930.5 2801.21C3139.98 2860.02 2333.5 2953.97 2075 3459C-140.5 3459 3901.01 5119.5 2930.5 4947Z"
							fill="url(#paint0_linear_234_9)"
						/>
					</g>
					<defs>
						<filter
							id="filter0_df_234_9"
							x="0.88269"
							y="0.27771"
							width="5338.57"
							height="6359.69"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
							x1="3502.96"
							y1="2295.91"
							x2="2431.42"
							y2="3717.34"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#713FA6" />
							<stop offset="1" stopColor="#4C246E" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		);
	},
);
