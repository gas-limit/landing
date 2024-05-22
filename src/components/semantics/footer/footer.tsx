"use client";
import { footer, legalRoutes } from "@/components/constants";
import { Footer as FooterContainer } from "@/components/templates";
import React from "react";
import { FooterCopyright, FooterSection, SocialLinks } from ".";
import { Logo } from "../Logo";

export const Footer = ({
	name,
	description,
}: Readonly<{
	name?: string;
	description?: string;
}>) => {
	return (
		<>
			<FooterContainer className="bg-[#E0E0E0]">
				<div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						<div>
							<Logo
								size={100}
								className={`sm:justify-start w-fit select-none`}
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
			</FooterContainer>
		</>
	);
};

const Description = ({ description }: Readonly<{ description?: string }>) => {
	return (
		<p className="max-w-md mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:text-left">
			{description ||
				"We are a team of developers and designers who are passionate about creating beautiful and functional websites."}
		</p>
	);
};
