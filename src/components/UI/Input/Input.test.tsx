import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Input } from ".";

describe("Input", () => {
	it("renders with default props", () => {
		const { asFragment } = render(<Input />);

		expect(asFragment()).toMatchSnapshot();
	});

	it("assigns class names by properties", () => {
		render(<Input variant="outlined" color="error" />);

		expect(screen.getByRole("textbox")).toHaveClass(
			"rounded-md ring-1 ring-inset focus:ring-2 focus:ring-inset text-red-800 ring-red-400 hover:ring-red-500 placeholder:text-red-400 focus:ring-red-600",
		);
	});

	it("applies default class names when no props are provided", () => {
		render(<Input />);

		expect(screen.getByRole("textbox")).toHaveClass(
			"block w-full border-0 py-1.5 transition-colors duration-200 ease-in-out sm:text-sm sm:leading-6 peer focus:ring-0 text-zinc-800 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-400 focus:ring-skyfall-500",
		);
	});

	it("injects native input properties", () => {
		render(<Input aria-label="Type here" />);

		expect(screen.getByLabelText("Type here")).toBeVisible();
	});

	it("handles input changes", async () => {
		render(<Input />);
		const input = screen.getByRole("textbox");

		await userEvent.type(input, "Typing");
		expect(input).toHaveValue("Typing");
	});
});
