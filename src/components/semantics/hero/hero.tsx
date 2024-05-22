"use client";
import { Text, Title } from "@/components/custom";
import { Article, Header, Section } from "@/components/templates";
import Link from "next/link";
import type React from "react";

interface HeroProps extends Partial<Record<string, string | string[]>> {}

export const Hero: React.FC<HeroProps> = ({
	image,
	title,
	subtitle,
	paragraph,
}) => {
	return (
		<Header
			className="w-screen h-[50dvh] bg-center bg-cover border border-red-400"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<Section className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center">
				<Article className="max-w-3xl mx-auto text-center">
					<Title
						h="h1"
						className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl"
						title={title as string}
						subtitle={(subtitle as string) ?? null}
						subClassName="block mt-4 text-xl font-semibold text-gray-300 sm:text-2xl"
					/>
					<Text
						className={`max-w-xl mx-auto mt-4 sm:text-xl/relaxed`}
						text={paragraph}
					/>
					<div className="flex flex-wrap justify-center gap-4 mt-8">
						<Link
							className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="/"
						>
							Get Started
						</Link>
						<Link
							className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
							href="/"
						>
							Learn More
						</Link>
					</div>
				</Article>
			</Section>
		</Header>
	);
};

export default Hero;

const Particles = () => {
	return (
		<div className={`oval`}>
			<div className="particle-1"></div>
			<div className="particle-2"></div>
			<div className="particle-3"></div>
		</div>
	);
};
