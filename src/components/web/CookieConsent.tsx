"use client";

import { Article as Card } from "@/components/templates";
import { Button } from "@/components/ui/button";
import { useCookieConsentStore } from "@/core/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const CookieConsent: React.FC = React.memo(() => {
	const { cookieConsent, setCookieConsent, setIsLoaded } =
		useCookieConsentStore();
	const [localStorageConsent, setLocalStorageConsent] = useLocalStorage(
		"cookie_consent",
		"granted",
	);
	const [isReady, setIsReady] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setIsReady(true);
		setIsLoaded(true);
		if (localStorageConsent !== null) {
			setCookieConsent(localStorageConsent === "granted");
		}

		const checkColorScheme = () => {
			setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
		};

		checkColorScheme();
		window.addEventListener("resize", checkColorScheme);

		return () => {
			window.removeEventListener("resize", checkColorScheme);
		};
	}, [localStorageConsent, setCookieConsent, setIsLoaded]);

	useEffect(() => {
		if (isReady) {
			setLocalStorageConsent(cookieConsent ? "granted" : "denied");
		}
	}, [cookieConsent, isReady, setLocalStorageConsent]);

	if (!isReady) return null;

	return (
		<Card
			role="alert"
			aria-live="polite"
			className={`
        fixed bottom-4 left-4 right-4 md:max-w-md md:left-auto
        flex flex-col gap-4 p-6
        rounded-xl shadow-lg
        transition-all duration-300 ease-in-out
        ${
					cookieConsent
						? "opacity-0 pointer-events-none translate-y-10"
						: "opacity-100 translate-y-0"
				}
        ${
					isDark
						? "bg-gradient-to-r from-[#3A1E3B] via-[#2A2A4C] to-[#1E3A3A] text-white"
						: "bg-gradient-to-r from-[#E0C7FF] via-[#E5DBFF] to-[#A0E7E5] text-purple-900"
				}
        before:absolute before:inset-0 before:rounded-xl before:bg-white/10 before:blur-lg before:opacity-40
        after:content-[''] after:absolute after:inset-0 after:rounded-xl after:bg-white/5 after:opacity-0 hover:after:opacity-100 after:transition-opacity
      `}
		>
			<div className="space-y-4 relative z-10">
				<h2 className="text-lg font-semibold">We value your privacy</h2>
				<p className="text-sm opacity-80">
					We use <span className="font-medium text-sky-400">cookies</span> to
					enhance your browsing experience and analyze our traffic.{" "}
					<Link
						href="/legal/cookies"
						className="underline hover:text-sky-400 transition-colors"
					>
						Learn more about our use of cookies
					</Link>
				</p>
			</div>
			<div className="flex flex-col sm:flex-row gap-3 sm:justify-end relative z-10">
				<Button
					variant="outline"
					className={`
            w-full sm:w-auto
            ${
							isDark
								? "bg-gray-700 hover:bg-gray-600"
								: "bg-white/50 hover:bg-white/70"
						}
            transition-colors
          `}
					onClick={() => setCookieConsent(false)}
				>
					Decline
				</Button>
				<Button
					variant="default"
					className={`
            w-full sm:w-auto
            ${
							isDark
								? "bg-gradient-to-r from-[#C1A3E7] via-[#D4B8EF] to-[#A3E4E7] text-purple-900"
								: "bg-gradient-to-r from-[#9B6FCC] via-[#A57FD8] to-[#6DCED1] text-white"
						}
            hover:shadow-[0px_0px_15px_rgba(220,170,250,0.6)]
            transition-all
          `}
					onClick={() => setCookieConsent(true)}
				>
					Accept Cookies
				</Button>
			</div>
		</Card>
	);
});
