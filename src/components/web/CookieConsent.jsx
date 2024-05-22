"use client";

import { Article as Card } from "@/components/templates";
import { Button } from "@/components/ui/button";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CookieConsent = () => {
	const [cookieConsent, setCookieConsent] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	
	useEffect(() => {
		const storedCookieConsent = getLocalStorage("cookie_consent", null);
		setIsLoaded(true);
		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	useEffect(() => {
		const newValue = cookieConsent ? "granted" : "denied";
		
		window.gtag("consent", "update", {
			analytics_storage: newValue,
		});
		setLocalStorage("cookie_consent", cookieConsent);
	}, [cookieConsent]);

	if (!isLoaded) return null;
	return (
		<>
			<Card
				className={`
					my-10 mx-auto max-w-max md:max-w-screen-sm
      		fixed bottom-0 left-0 right-0 text-white
      		flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
      	bg-gray-700 rounded-lg shadow ${cookieConsent ? "hidden" : "flex"}`}
			>
				<section
					className={`flex flex-col gap-4 justify-between items-center w-full py-0`}
				>
					<div className="text-left">
						<Link href="/legal/cookies">
							<p>
								This website uses{" "}
								<span className="font-bold text-sky-400">cookies</span> to offer
								you a better browsing experience. Find out more on how we use
								cookies.
							</p>
						</Link>
					</div>

					<menu className="flex gap-2 ">
						<li
							className={`

                `}
						>
							<Button className="..." onClick={() => setCookieConsent(false)}>
								Decline
							</Button>
						</li>
						<li>
							<Button className="..." onClick={() => setCookieConsent(true)}>
								Allow Cookies
							</Button>
						</li>
					</menu>
				</section>
			</Card>
		</>
	);
};
