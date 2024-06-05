"use client";

import { Article as Card } from "@/components/templates";
import { Button } from "@/components/ui/button";
import { useCookieConsentStore } from "@/core/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const CookieConsent = React.memo(() => {
	const { cookieConsent, setCookieConsent, setIsLoaded, isLoaded } =
		useCookieConsentStore();
	const [localStorageConsent, setLocalStorageConsent] = useLocalStorage(
		"cookie_consent",
		"granted",
	);
	const [hasMounted, setHasMounted] = useState(false);

	// Ensure the component has mounted before rendering
	useEffect(() => {
		setHasMounted(true);
	}, []);

	// Sync local storage value with zustand store
	useEffect(() => {
		if (hasMounted) {
			setIsLoaded(true);
			if (localStorageConsent !== null) {
				setCookieConsent(localStorageConsent === "granted");
			}
		}
	}, [hasMounted, localStorageConsent, setCookieConsent, setIsLoaded]);

	// Update local storage whenever cookieConsent changes
	useEffect(() => {
		if (isLoaded && hasMounted) {
			setLocalStorageConsent(cookieConsent ? "granted" : "denied");
		}
	}, [cookieConsent, isLoaded, hasMounted, setLocalStorageConsent]);

	if (!isLoaded || !hasMounted) return null;
	return (
		<>
			<Card
				className={`
						my-10 mx-auto max-w-max md:max-w-screen-sm
						fixed bottom-0 left-0 right-0
						flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
						bg-gray-700 rounded-lg shadow ${cookieConsent ? "hidden" : "flex"}`}
			>
				<section
					className={`flex flex-col gap-4 justify-between items-center w-full py-0`}
				>
					<div className="text-left">
						<Link href="/legal/cookies">
							<p>
								This website uses
								<span className="font-bold text-sky-400">cookies</span> to offer
								you a better browsing experience. Find out more on how we use
								cookies.
							</p>
						</Link>
					</div>

					<menu className="flex gap-2">
						<li>
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
});
