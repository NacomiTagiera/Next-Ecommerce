import { render, screen } from "@testing-library/react";

import { FormField } from ".";

describe("FormField", () => {
	it("renders an input by default", () => {
		render(<FormField name="test" />);

		const input = screen.getByRole("textbox", { name: /test/i });
		expect(input.tagName).toBe("INPUT");
		expect(input).toBeVisible();
	});

	it("renders a textarea when component is 'textarea'", () => {
		render(<FormField name="test" component="textarea" />);

		const textarea = screen.getByRole("textbox", { name: /test/i });
		expect(textarea.tagName).toBe("TEXTAREA");
		expect(textarea).toBeVisible();
	});

	it("displays an error message when there is an issue", () => {
		render(<FormField name="test" issues={["This field is required"]} />);

		expect(screen.getByText("This field is required")).toBeVisible();
		expect(screen.getByRole("textbox", { name: /test/i })).toHaveAccessibleErrorMessage(
			"This field is required",
		);
	});

	it("applies styles to the label when there is an issue", () => {
		render(<FormField name="test" issues={["This field is required"]} />);
		expect(screen.getByText(/test/i)).toHaveClass("text-red-800");
	});

	test("displays only the first issue", () => {
		render(<FormField name="test" issues={["Error 1", "Error 2"]} />);

		expect(screen.getByText("Error 1")).toBeVisible();
		expect(screen.queryByText("Error 2")).not.toBeInTheDocument();
	});

	it("associates the label with the input", () => {
		render(<FormField name="test" />);

		expect(screen.getByRole("textbox", { name: /test/i })).toHaveAttribute("id", "test");
		expect(screen.getByText(/test/i)).toHaveAttribute("for", "test");
	});

	it("passes custom props to the input element", () => {
		render(<FormField name="test" placeholder="Search" disabled />);
		expect(screen.getByPlaceholderText("Search")).toBeDisabled();
	});

	it("assigns class names by properties", () => {
		render(<FormField name="test" component="textarea" variant="filled" color="primary" />);

		expect(screen.getByRole("textbox", { name: /test/i })).toHaveClass(
			"peer bg-zinc-50 hover:bg-zinc-100 focus:ring-0 focus:bg-zinc-50 text-zinc-800 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-400 focus:ring-skyfall-500",
		);
	});
});
