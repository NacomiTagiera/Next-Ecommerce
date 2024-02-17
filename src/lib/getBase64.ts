import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (path: string) => {
	let buffer: Buffer;

	if (path.startsWith("https://")) {
		buffer = await fetch(path).then(async (res) => Buffer.from(await res.arrayBuffer()));
	} else {
		buffer = await fs.readFile("./public" + path);
	}

	const { base64 } = await getPlaiceholder(buffer);
	return base64;
};
