import * as pwa from "@ducanh2912/next-pwa";
import million from "million/compiler";
import type { NextConfig } from "next";

const withPwa = pwa.default({
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	register: true,
	sw: "service-worker.js",
	fallbacks: {
		document: "src/app/offline",
	},
	workboxOptions: {
		disableDevLogs: true,
	},
});

const config: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

const millions = million.next(
	{
		appDir: true,
		basePath: "/",
		webpack: (config, _options) => {
			return config;
		},
	},
	{ auto: { rsc: true } },
);

module.exports = withPwa(millions(config));
