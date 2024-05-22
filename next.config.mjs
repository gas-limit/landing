await import("./src/env.js");
import pwa from "@ducanh2912/next-pwa";
import MillionLint from "@million/lint";
import million from "million/compiler";

const withPwa = pwa({
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	dest: "public",
	register: true,
	sw: "service-worker.js",
	workboxOptions: {
		disableDevLogs: true,
	},
});

/**
 * @type {import('next').NextConfig}
 */
const config = {
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},
};

const millionConfig = {
	auto: true,
};

const finalConfig = withPwa(
	million.next(MillionLint.next({ rsc: true })(config), millionConfig),
);

export default finalConfig;
