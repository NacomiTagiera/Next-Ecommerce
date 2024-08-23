import { render, screen } from "@testing-library/react";

import { Label } from ".";

describe("Label", () => {
	it("renders with default props", () => {
		const { asFragment } = render(<Label />);
		expect(asFragment()).toMatchSnapshot();
	});

	it("assigns class names by properties", () => {
		render(
			<Label color="error" visibility="shown">
				Label
			</Label>,
		);
		expect(screen.getByText("Label")).toHaveClass(
			"block text-sm font-medium leading-6 text-red-800",
		);
	});

	it("applies default class names when no props are provided", () => {
		render(<Label>Label</Label>);
		expect(screen.getByText("Label")).toHaveClass(
			"block text-sm font-medium leading-6 text-zinc-900",
		);
	});

	it("injects native label properties", () => {
		render(<Label data-testid="Test" />);
		expect(screen.getByTestId("Test")).toBeVisible();
	});
});
