import CookieConsent from "@/components/web/CookieConsent";
import Providers from "@/providers/Providers";
import GoogleAnalytics from "@/scripts/Scripts";
import "@/styles/globals.css";
import { constructMetadata, constructViewport } from "@/utils";
import type React from "react";

export const metadata = constructMetadata();
export const viewport = constructViewport();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<GoogleAnalytics GA_MEASUREMENT_ID={"G-MWD2YFWBVE"} />
			<body
				className={`

				`}
			>
				<Providers>
					<CookieConsent />
					{children}
				</Providers>
			</body>
		</html>
	);
}
