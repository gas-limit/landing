"use client";

import { useCookieConsentStore } from "@/core/store";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";
export const Scripts = () => {
	const { cookieConsent } = useCookieConsentStore();
	return (
		<>
			{cookieConsent && (
				<>
					<Head>
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
						<link rel="preload" href="/assets/fonts/Gafata-Regular.ttf" as="font" type="font/ttf" crossOrigin={`anonymous`} />
						<link rel="preload" href="/_next/static/css/e47711e87916f052.css" as="style" />
						<link rel="preload" href="/_next/static/css/f29ef599dc320aba.css" as="style" />
					</Head>
					<Analytics />
				</>
			)}
		</>
	);
};
