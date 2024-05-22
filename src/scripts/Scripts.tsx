"use client";
import { Suspense } from "react";
import Script from "next/script";
import SearchParamsWrapper from "./SearchParamsWrapper"; 

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string; }) {
	return (
		<>
			<Suspense fallback={null}>
				<SearchParamsWrapper GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
			</Suspense>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	);
}
