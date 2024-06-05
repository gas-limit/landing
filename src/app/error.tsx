"use client";

import {
	Article,
	Candle,
	Menu,
	Section,
	Text,
	Title,
	glass,
} from "@/components";
import { Button } from "@/components/ui/button";
import { useLayoutEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useLayoutEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<>
			<Section
				className={`
					flex flex-col justify-center items-center h-screen w-screen overflow-hidden
					absolute top-0 left-0 z-50 bg-[#333]
				`}
			>
				<Article
					className={`
							mx-auto
							prose-lg absolute flex flex-col justify-center items-center ${glass} w-fit bg-black/70 p-8 rounded-lg shadow-lg border border-zinc-600 
						`}
				>
					<Title
						h="h2"
						title="Something went wrong!"
						className={`
							font-bold text-3xl
					`}
					/>
					<Text
						text={error.message}
						className={`
							max-w-xl mx-auto mt-4 sm:text-xl/relaxed
						`}
					/>
					<Menu
						className={`
							flex flex-wrap justify-center gap-2 mt-8 w-full
						`}
					>
						<li
							className={`
							text-sm font-medium rounded focus:outline-none focus:ring active:text-opacity-75 sm:w-auto w-full border border-red-200
						`}
						>
							<Button
								className={`
									text-sm font-medium bg-red-600 border border-red-600 rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto
								`}
								variant={`outline`}
								onClick={() => reset()}
							>
								Try again
							</Button>
						</li>
					</Menu>
				</Article>
				<Candle />
			</Section>
		</>
	);
}
