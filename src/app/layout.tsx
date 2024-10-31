import Providers from "@/providers/Providers";
import { constructMetadata, constructViewport } from "@/utils";
import type { NextWebVitalsMetric } from "next/app";
import type React from "react";
import "@/styles/css/globals.css";
import "@/styles/sass/globals.scss";
import { ScrollToTop } from "@/components";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export const metadata = constructMetadata();
export const viewport = constructViewport();

/**
 * @function reportWebVitals
 * @param {NextWebVitalsMetric} metric
 * @argument metric - The metric object
 * @returns void
 * @description This function is called once per metric. The `metric` object contains the following properties:
 * @property {string} id - A unique ID representing the entry.
 * @property {string} name - The name of the metric (e.g. "FCP").
 * @property {string} label - The user-friendly label for the metric (e.g. "First Contentful Paint").
 * @property {number} startTime - The time the metric was recorded (in milliseconds since the epoch).
 * @property {number} value - The value of the metric (e.g. 1234).
 * @property {boolean} isFinal - A boolean indicating if the value is final (e.g. the value of FCP/FID/etc. is not final when it is an estimate).
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
	if (metric.label === "web-vital") {
		console.log(metric);
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className="bg-gradient-to-b from-[#7341aa] to-[#4C246E]"
		>
			<Head>
				<link
					rel="preload"
					href="/assets/fonts/Gafata-Regular.ttf"
					as="font"
					type="font/ttf"
					crossOrigin={`anonymous`}
				/>
				<link
					rel="preload"
					href="/_next/static/css/e47711e87916f052.css"
					as="style"
				/>
				<link
					rel="preload"
					href="/_next/static/css/f29ef599dc320aba.css"
					as="style"
				/>
			</Head>
			<body
				className={`
		
					overflow-x-hidden
				`}
			>
				<Providers>
					{children}
					<Analytics />
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	);
}
