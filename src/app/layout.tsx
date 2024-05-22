import { CookieConsent, ScrollToTop } from "@/components";
import Providers from "@/providers/Providers";
import GoogleAnalytics from "@/scripts/Scripts";
import { constructMetadata, constructViewport } from "@/utils";
import type { NextWebVitalsMetric } from "next/app";
import type React from "react";
import "@/styles/globals.css";
import "@/styles/globals.scss";

export const metadata = constructMetadata();
export const viewport = constructViewport();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<GoogleAnalytics GA_MEASUREMENT_ID={"G-MWD2YFWBVE"} />
			<body
				className={`

				`}
			>
				<Providers>
					<CookieConsent />
					<ScrollToTop />
					{children}
				</Providers>
			</body>
		</html>
	);
}

/**
 * @function reportWebVitals
 * @param {NextWebVitalsMetric} metric
 * @argument metric - The metric object
 * @returns void
 * @description This function is called once per metric. The `metric` object contains the following properties:
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
	if (metric.label === "web-vital") {
		console.log(metric);
	}
}
