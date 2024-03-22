import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body !== null &&
		"data" in body &&
		typeof body.data === "object" &&
		body.data !== null &&
		"slug" in body.data &&
		typeof body.data.slug === "string"
	) {
		revalidatePath(`/product/${body.data.slug}`);
		return new Response(null, { status: 204 });
	}

	return new Response(null, { status: 400 });
}
