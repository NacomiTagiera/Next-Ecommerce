// @ts-check
import withMDX from "@next/mdx";
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				port: "",
				hostname: "media.graphassets.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				port: "",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
		],
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

export default withPlaiceholder(withMDX()(nextConfig));
