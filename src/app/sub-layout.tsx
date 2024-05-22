"use client";

import { useBackgroundStore } from "@/core/store";
import type React from "react";

export const SubLayout: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	const width = document.body.clientWidth;
	const height = document.body.clientHeight;

	return (
		<div
			className={`
        fixed top-0 left-0 right-0 bottom-0
        overflow-hidden
        z-[-1]
        
      `}
			style={{
				backgroundImage: `url("data:image/svg+xml,<svg width=\\"${width}\\" height=\\"${height}\\" viewBox=\\"0 0 ${width} ${height}\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><g clip-path=\\"url(%23clip0_233_4)\\"><rect width=\\"1440\\" height=\\"3197\\" fill=\\"%23333333\\" /><g filter=\\"url(%23filter0_df_233_4)\\"><path d=\\"M1085.68 3401.24C1455.02 2976.58 987.309 -634.948 1356.65 -210.289C1709.55 195.452 1709.55 820.933 1356.65 1226.67C987.309 1651.33 174.579 1918.67 -194.767 1494.01C-547.659 1088.27 732.785 3806.99 1085.68 3401.24Z\\" fill=\\"url(%23paint0_linear_233_4)\\" /></g><g style=\\"mix-blend-mode:color-dodge\\" filter=\\"url(%23filter1_f_233_4)\\"><circle cx=\\"580.321\\" cy=\\"256.321\\" r=\\"629\\" fill=\\"url(%23paint1_radial_233_4)\\" /></g><g filter=\\"url(%23filter2_b_233_4)\\"><rect width=\\"1440\\" height=\\"3197\\" fill=\\"%23333333\\" fill-opacity=\\"0.11\\" /></g></g><defs><filter id=\\"filter0_df_233_4\\" x=\\"-1656.08\\" y=\\"-1645.33\\" width=\\"4677.8\\" height=\\"6488.4\\" filterUnits=\\"userSpaceOnUse\\" color-interpolation-filters=\\"sRGB\\"><feFlood flood-opacity=\\"0\\" result=\\"BackgroundImageFix\\" /><feColorMatrix in=\\"SourceAlpha\\" type=\\"matrix\\" values=\\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\\" result=\\"hardAlpha\\" /><feOffset dy=\\"4\\" /><feGaussianBlur stdDeviation=\\"2\\" /><feComposite in2=\\"hardAlpha\\" operator=\\"out\\" /><feColorMatrix type=\\"matrix\\" values=\\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\\" /><feBlend mode=\\"normal\\" in2=\\"BackgroundImageFix\\" result=\\"effect1_dropShadow_233_4\\" /><feBlend mode=\\"normal\\" in=\\"SourceGraphic\\" in2=\\"effect1_dropShadow_233_4\\" result=\\"shape\\" /><feGaussianBlur stdDeviation=\\"700.2\\" result=\\"effect2_foregroundBlur_233_4\\" /></filter><filter id=\\"filter1_f_233_4\\" x=\\"-730.579\\" y=\\"-1054.58\\" width=\\"2621.8\\" height=\\"2621.8\\" filterUnits=\\"userSpaceOnUse\\" color-interpolation-filters=\\"sRGB\\"><feFlood flood-opacity=\\"0\\" result=\\"BackgroundImageFix\\" /><feBlend mode=\\"normal\\" in=\\"SourceGraphic\\" in2=\\"BackgroundImageFix\\" result=\\"shape\\" /><feGaussianBlur stdDeviation=\\"340.95\\" result=\\"effect1_foregroundBlur_233_4\\" /></filter><filter id=\\"filter2_b_233_4\\" x=\\"-611.8\\" y=\\"-611.8\\" width=\\"2663.6\\" height=\\"4420.6\\" filterUnits=\\"userSpaceOnUse\\" color-interpolation-filters=\\"sRGB\\"><feFlood flood-opacity=\\"0\\" result=\\"BackgroundImageFix\\" /><feGaussianBlur in=\\"BackgroundImageFix\\" stdDeviation=\\"305.9\\" /><feComposite in2=\\"SourceAlpha\\" operator=\\"in\\" result=\\"effect1_backgroundBlur_233_4\\" /><feBlend mode=\\"normal\\" in=\\"SourceGraphic\\" in2=\\"effect1_backgroundBlur_233_4\\" result=\\"shape\\" /></filter><linearGradient id=\\"paint0_linear_233_4\\" x1=\\"1585.28\\" y1=\\"721.243\\" x2=\\"513.371\\" y2=\\"2142.78\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"%23328170\\" /><stop offset=\\"1\\" stop-color=\\"%234C246E\\" /></linearGradient><radialGradient id=\\"paint1_radial_233_4\\" cx=\\"0\\" cy=\\"0\\" r=\\"1\\" gradientUnits=\\"userSpaceOnUse\\" gradientTransform=\\"translate(620.202 281.26) rotate(149.592) scale(830.299 1619.91)\\"><stop stop-color=\\"%23328270\\" /><stop offset=\\"1\\" stop-color=\\"%234C246E\\" /></radialGradient><clipPath id=\\"clip0_233_4\\"><rect width=\\"1440\\" height=\\"3197\\" fill=\\"white\\" /></clipPath></defs></svg>")`,
				backgroundSize: "fit",
				backgroundAttachment: "fixed",
				backgroundRepeat: "no-repeat",
			}}
		>
			{children}
		</div>
	);
};
