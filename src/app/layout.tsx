import { CookieConsent, ScrollToTop } from "@/components";
import Providers from "@/providers/Providers";
import { GoogleTagManager } from "@next/third-parties/google";
import { constructMetadata, constructViewport } from "@/utils";
import type { NextWebVitalsMetric } from "next/app";
import type React from "react";
import "@/styles/css/globals.css";
import "@/styles/sass/globals.scss";
import Head from "next/head";
import GoogleAnalytics from "@/scripts/Scripts";
export const metadata = constructMetadata();
export const viewport = constructViewport(); 

/**
 * @function reportWebVitals
 * @param {NextWebVitalsMetric} metric
 * @argument metric - The metric object
 * @returns void
 * @description This function is called once per metric. The `metric` object contains the following properties:
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
	if (metric.label === "web-vital") { console.log(metric); }
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
		>
			<GoogleAnalytics GA_MEASUREMENT_ID={"G-SEDSYB6798"} />
			<body
				className={`
					overflow-x-hidden
					dark:bg-[#333333] bg-[#F5F5F5]
					flex flex-col min-h-screen
				`}
			>
				<Providers>
					{/* <CookieConsent /> */}
					<ScrollToTop />
					{children}
				</Providers>
			</body>
		</html>
	);
}
