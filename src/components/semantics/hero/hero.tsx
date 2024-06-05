"use client";
import { Article, Header, CustomPicture as Picture, Text } from "@/components";
import Image from "next/image";
import React from "react";

interface HeroProps extends Partial<Record<string, string | string[]>> {}

export const Hero: React.FC<HeroProps> = React.memo(
	({ title, subtitle, paragraph }) => {
		return (
			<Header
				className={`
				max-w-screen-xl px-4 pt-16
				pb-6 mx-auto sm:px-6 lg:px-8
				lg:pt-24 top-0 max-h-[90vh]
				overflow-hidden relative
			`}
			>
				<Article
					className={`
						w-full mx-auto text-center  
						lg:order-1 lg:rounded-lg 
						lg:overflow-hidden
					`}
				>
					<h1
						className={`
						text-4xl sm:text-6xl lg:text-7xl
						font-extrabold text-white
					`}
					>
						{title}
					</h1>
					<Text
						className={`
    				block mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-5 text-white
					`}
						text={subtitle}
					/>
				</Article>
				<Picture
					className={`
						rounded-full h-[50%] w-full p-2 
						flex items-center
						justify-center object-contain object-center
					`}
				>
					<Particles />
					<Image
						className={`
						rounded-full h-[50%] w-full
						object-contain object-center
					`}
						src={`/assets/images/landing/hero.png`}
						alt={`hero image`}
						width={1000}
						height={1080}
						fetchPriority={`high`}
					/>
				</Picture>
			</Header>
		);
	},
);

export default Hero;

const Particles = () => {
	return (
		<div
			className={`
				absolute top-0 left-0 
				right-0 bottom-0 mb-8
			`}
		>
			{Array.from({ length: 100 }).map((_, index) => (
				<div
					key={index}
					className={`
						circle-container mb-8 absolute
						top-0 left-0 right-0 bottom-0
					`}
				>
					<div className="circle"></div>
				</div>
			))}
		</div>
	);
};
