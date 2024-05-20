import { Footer as FooterContainer } from "@/components/templates";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = ({
	name,
	description,
}: Readonly<{
	name?: string;
	description?: string;
}>) => {
	return (
		<>
			<FooterContainer className="bg-white">
				<div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						<div>
							<div className="flex justify-center text-teal-600 sm:justify-start">
								<Image
									src={`/assets/svgs/logo.svg`}
									alt={``}
									height={40}
									width={40}
								/>
							</div>

							<p className="max-w-md mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:text-left">
								{description ||
									"We are a team of developers and designers who are passionate about creating beautiful and functional websites."}
							</p>

							<ul className="flex justify-center gap-6 mt-8 sm:justify-start md:gap-8">
								<li>
									<Link
										href="/"
										rel="noreferrer"
										target="_blank"
										className="text-teal-700 transition hover:text-teal-700/75"
									>
										<span className="sr-only">Twitter</span>
										<FaXTwitter className="w-6 h-6" />
									</Link>
								</li>

								<li>
									<Link
										href="/"
										rel="noreferrer"
										target="_blank"
										className="text-teal-700 transition hover:text-teal-700/75"
									>
										<span className="sr-only">GitHub</span>
										<FaGithub className="w-6 h-6" />
									</Link>
								</li>
							</ul>
						</div>

						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-gray-900">About Us</p>

								<ul className="mt-8 space-y-4 text-sm">
									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											Company History
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											Meet the Team
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											Employee Handbook
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											{" "}
											Careers{" "}
										</Link>
									</li>
								</ul>
							</div>

							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-gray-900">
									Our Services
								</p>

								<ul className="mt-8 space-y-4 text-sm">
									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											Web Development
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											{" "}
											Web Design{" "}
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											{" "}
											Marketing{" "}
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											{" "}
											Google Ads{" "}
										</Link>
									</li>
								</ul>
							</div>

							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-gray-900">
									Helpful Links
								</p>

								<ul className="mt-8 space-y-4 text-sm">
									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											{" "}
											FAQs{" "}
										</Link>
									</li>

									<li>
										<Link
											className="text-gray-700 transition hover:text-gray-700/75"
											href="/"
										>
											{" "}
											Support{" "}
										</Link>
									</li>

									<li>
										<Link
											className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
											href="/"
										>
											<span className="text-gray-700 transition group-hover:text-gray-700/75">
												Live Chat
											</span>

											<span className="relative flex w-2 h-2">
												<span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
												<span className="relative inline-flex bg-teal-500 rounded-full size-2"></span>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="pt-6 mt-12 border-t border-gray-100">
						<div className="text-center sm:flex sm:justify-between sm:text-left">
							<p className="text-sm text-gray-500">
								<span className="block sm:inline">All rights reserved.</span>

								<Link
									className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
									href="/terms-and-conditions"
								>
									Terms & Conditions
								</Link>

								<span>&middot;</span>

								<Link
									className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
									href="/privacy-policy"
								>
									Privacy Policy
								</Link>
							</p>
							<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
								&copy; 2024 {name}
							</p>
						</div>
					</div>
				</div>
			</FooterContainer>
		</>
	);
};
