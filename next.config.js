/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	experimental: {
		mdxRs: true,
		typedRoutes: true,
		workerThreads: false,
		cpus: 1,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: true,
			},
			{
				source: "/collections/:slug",
				destination: "/collections/:slug/1",
				permanent: true,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
