import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Button } from ".";

describe("Button", () => {
	it("renders with default props", () => {
		const { asFragment } = render(<Button />);

		expect(asFragment()).toMatchSnapshot();
	});

	it("displays its content", () => {
		render(
			<Button>
				Click <b>Me</b>
			</Button>,
		);

		expect(screen.getByText(/Click/)).toBeVisible();
		expect(screen.getByText(/Me/)).toBeVisible();
	});

	it("assigns class names by properties", () => {
		render(<Button variant="outlined" size="lg" />);

		expect(screen.getByRole("button")).toHaveClass(
			"bg-transparent border border-slate-200 hover:bg-slate-100 text-base px-5 py-3",
		);
	});

	it("injects native button properties", () => {
		render(<Button title="Click me">Click me</Button>);

		expect(screen.getByTitle("Click me")).toBeVisible();
	});

	it("renders a link when href is provided", () => {
		render(<Button href="/about">About</Button>);

		expect(screen.getByRole("link")).toHaveAttribute("href", "/about");
	});

	it("renders leading and trailing icons", () => {
		const leadingIcon = () => <svg data-testid="leading" />;
		const trailingIcon = () => <svg data-testid="trailing" />;
		render(
			<Button leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
				Click me
			</Button>,
		);

		expect(screen.getByTestId("leading")).toBeVisible();
		expect(screen.getByTestId("trailing")).toBeVisible();
	});

	it("handles correctly disabled state", async () => {
		const onClick = jest.fn();
		render(
			<Button aria-disabled onClick={onClick}>
				Click me
			</Button>,
		);

		await userEvent.click(screen.getByRole("button"));
		expect(onClick).not.toHaveBeenCalled();
	});
});
