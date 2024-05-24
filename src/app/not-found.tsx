"use client";

import {
	Article,
	CustomPicture as Picture,
	Section,
	Text,
	Title,
} from "@/components";
import Image from "next/image";
import type React from "react";

export default function NotFound() {
	return (
		<>
			<Section
				className={`
					flex flex-col justify-center items-center
					min-h-[calc(100vh-4rem)]
					p-4
				`}
			>
				<Article
					className={`
						flex flex-row justify-center items-center
						text-[12rem] font-bold
						leading-none overflow-hidden
					`}
				>
					<span>4</span>
					<Picture
						className={`
							w-[300px] h-[300px]
							overflow-hidden		
						`}
					>
						<Image
							src={`/assets/images/web/404.png`}
							alt={`404`}
							width={300}
							height={300}
						/>
					</Picture>
					<span>4</span>
				</Article>
				<Text
					text={`The page you are looking for does not exist.`}
					className={`
						text-center text-2xl font-semibold
					`}
				/>
			</Section>
		</>
	);
}
