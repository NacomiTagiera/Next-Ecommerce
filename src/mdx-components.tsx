import type { MDXComponents } from "mdx/types";

import NextImage, { type ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		img: (props) => (
			<NextImage
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
				{...(props as ImageProps)}
			/>
		),
		...components,
	};
}
