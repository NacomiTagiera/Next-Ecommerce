import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (path: string) => {
	const buffer = await fetch(path).then(async (res) => Buffer.from(await res.arrayBuffer()));
	const { base64 } = await getPlaiceholder(buffer);

	return base64;
};
