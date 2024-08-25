import { useFormStatus } from "react-dom";
import { render, screen } from "@testing-library/react";

import { ActionButton } from ".";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-dom", () => ({
	...jest.requireActual("react-dom"),
	useFormStatus: jest.fn(),
}));

const mockedUseFormStatus = useFormStatus as jest.Mock;

describe("ActionButton", () => {
	beforeEach(() => {
		mockedUseFormStatus.mockReset();
	});

	it("renders children when not pending", () => {
		mockedUseFormStatus.mockReturnValue({ pending: false });

		render(<ActionButton>Submit</ActionButton>);

		expect(screen.getByRole("button")).toHaveTextContent("Submit");
	});

	it("shows a loading state when the form is being submitted", () => {
		mockedUseFormStatus.mockReturnValue({ pending: true });

		render(<ActionButton>Submit</ActionButton>);

		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("Processing...");
		expect(screen.getByTestId("loader-icon")).toBeVisible();
		expect(button).toHaveClass("cursor-wait");
	});

	it("renders the leading icon when not pending", () => {
		mockedUseFormStatus.mockReturnValue({ pending: false });

		render(
			<ActionButton leadingIcon={() => <svg data-testid="leading-icon" />}>Submit</ActionButton>,
		);

		expect(screen.getByTestId("leading-icon")).toBeVisible();
	});

	it("does not render the trailing icon when pending", () => {
		mockedUseFormStatus.mockReturnValue({ pending: true });

		render(
			<ActionButton trailingIcon={() => <svg data-testid="trailing-icon" />}>Submit</ActionButton>,
		);

		expect(screen.queryByTestId("trailing-icon")).not.toBeInTheDocument();
	});

	it("passes the rest of the props to the button", () => {
		mockedUseFormStatus.mockReturnValue({ pending: false });

		render(<ActionButton className="custom-class">Submit</ActionButton>);

		expect(screen.getByRole("button")).toHaveClass("custom-class");
	});

	it("disables the button via aria-disabled when pending", () => {
		mockedUseFormStatus.mockReturnValue({ pending: true });

		render(<ActionButton>Submit</ActionButton>);

		expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
	});
});
