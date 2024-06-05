"use client";

import { Article, Picture, Text } from "@/components";
import Image from "next/image";
import React from "react";

export const Card: React.FC<{
	image: string;
	name: string;
}> = React.memo(({ image, name }) => {
	return (
		<Article
			className={`
				flex flex-col justify-center items-center
				rounded-lg shadow-lg p-2  bg-gradient-to-b from-[#3A1E3B]/10 to-[#3A1E3B]/50
			`}
		>
			<Picture
				className={`relative overflow-hidden h-[100px] min-w-[100px]  flex justify-center items-center `}
				key={image}
			>
				<Image
					src={image}
					alt={``}
					fill
					sizes={`(min-width: 640px) 640px, 100vw`}
					loading={`lazy`}
					fetchPriority={`low`}
					quality={100}
					style={{ objectFit: "contain", padding: "10px" }}
				/>
				<source srcSet={image} type={`image/webp`} />
			</Picture>
			<Text
				className={`
						p-2 text-center text-white
						font-semibold text-lg
					`}
				text={name}
			/>
		</Article>
	);
});
