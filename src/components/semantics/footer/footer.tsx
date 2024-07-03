"use client";
import { footer, legalRoutes } from "@/components/constants";
import { Footer } from "@/components/templates";
import React from "react";
import { FooterCopyright, FooterSection, SocialLinks } from ".";
import { Logo } from "../Logo";

export const FooterBar = ({
	name,
	description,
}: Readonly<{
	name?: string;
	description?: string;
}>) => {
	return (
		<Footer
			className={`
					bg-gradient-to-b from-[#3A1E3B]/10 
					to-[#3A1E3B]/90 w-[100dvw] bottom-0 text-white
				`}
			style={{
				color: "white",
			}}
		>
			<div className="px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24 max-w-screen-xl">
				<div
					className={`
							grid grid-cols-1 gap-8
							lg:grid-cols-3
						`}
				>
					<div
						className={`
								flex flex-col items-center justify-center gap-4
								sm:justify-start mx-auto w-full
							`}
					>
						<Logo
							size={`40`}
							className={`
									sm:justify-start w-full
									select-none
								`}
						/>

						<Description description={description} />

						<SocialLinks />
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
						{footer.map((section, index) => (
							<React.Fragment key={index}>
								{(
									Object.entries(section) as [
										string,
										{ name: string; url: string }[],
									][]
								).map(([title, links]) => (
									<FooterSection key={title} title={title} links={links} />
								))}
							</React.Fragment>
						))}
					</div>
				</div>

				<FooterCopyright name={name!} legalRoutes={legalRoutes} />
			</div>
		</Footer>
	);
};

const Description = ({ description }: Readonly<{ description?: string }>) => {
	return (
		<p className="w-full mt-6 leading-relaxed text-center sm:text-left">
			{description ||
				"We are a team of developers and designers who are passionate about creating beautiful and functional websites."}
		</p>
	);
};
