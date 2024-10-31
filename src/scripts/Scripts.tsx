"use client";

import { useCookieConsentStore } from "@/core/store";
import Script from "next/script";
export const Scripts = () => {
	const { cookieConsent } = useCookieConsentStore();
	return (
		<>
			{cookieConsent && (
				<>
					<head>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=G-SEDSYB6798`}
							strategy="afterInteractive"
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-SEDSYB6798');
						`}
						</Script>
					</head>
				</>
			)}
		</>
	);
};
