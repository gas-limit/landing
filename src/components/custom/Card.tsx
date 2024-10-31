"use client";

import { Article, Picture, Text } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CardProps {
	image: string;
	name: string;
}

export const ProtocolCard: React.FC<CardProps> = React.memo(
	({ image, name }) => {
		return (
			<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
				<Article
					className={`
          relative group
          flex flex-col justify-center items-center
          rounded-xl shadow-lg p-4
          bg-gradient-to-b from-[#3A1E3B]/20 to-[#3A1E3B]/60
          hover:from-[#3A1E3B]/30 hover:to-[#3A1E3B]/70
          transition-colors duration-200
        `}
				>
					<Picture
						className={`
            relative overflow-hidden
            w-[120px] h-[120px]
            flex justify-center items-center
            transition-transform duration-200
            group-hover:scale-105
          `}
					>
						<Image
							src={image}
							alt={`${name} logo`}
							fill
							sizes="120px"
							loading="lazy"
							fetchPriority="low"
							quality={100}
							className="object-contain p-4"
						/>
					</Picture>
					<Text
						className={`
            mt-4 text-center text-white
            font-semibold text-lg
            opacity-80 group-hover:opacity-100
            transition-opacity duration-200
          `}
						text={name}
					/>
				</Article>
			</motion.div>
		);
	},
);

export const ProtocolGrid: React.FC<{
	images: Array<{ source: string; name: string }>;
}> = ({ images }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
			{images.map((item, idx) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: idx * 0.1 }}
				>
					<ProtocolCard image={item.source} name={item.name} />
				</motion.div>
			))}
		</div>
	);
};
