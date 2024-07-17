"use client";
import { CustomArticle as Article, Character, Text, Title } from "@/components";
import React from "react";

export const AboutPanel: React.FC = React.memo(() => {
	const value =
		"Coven Finance offers a unique platform for anyone to create, manage, and invest in index tokens composed of a diverse mix of ERC20 tokens, liquidity provider tokens, lending tokens and governance tokens which can be automatically placed in yield farming strategies.";
	return (
		<>
			<Article
				className="flex flex-col justify-center items-center p-4"
				id={`about`}
			>
				<Title
					h={`h2`}
					text="Your Gateway to Decentralized Index Funds on Fantom"
					className={`
            text-3xl font-semibold
            text-center w-full h-[30px]
            mb-4
          `}
				/>
				<Text
					className={`
						flex leading-none
						p-10 max-w-screen-xl text-white
						flex-wrap text-center 
						text-xl font-light
						md:text-4xl
						md:leading-none
						md:p-12
						md:font-normal
						md:tracking-wide
					`}
					text={value}
				/>
			</Article>
		</>
	);
});
