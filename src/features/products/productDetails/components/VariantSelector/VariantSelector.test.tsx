import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useQueryParams } from "@/hooks/useQueryParams";

import { VariantSelector } from ".";

jest.mock("@/hooks/useQueryParams", () => ({
	useQueryParams: jest.fn(),
}));

const mockSetQueryParams = jest.fn();

describe("VariantSelector", () => {
	const colors = [{ name: "Red" }, { name: "Blue" }];
	const sizes = [{ name: "S" }, { name: "M" }, { name: "L" }];

	beforeEach(() => {
		jest.clearAllMocks();
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: new URLSearchParams(),
			setQueryParams: mockSetQueryParams,
		});
	});

	it("renders color and size options", () => {
		render(<VariantSelector colors={colors} sizes={sizes} />);

		expect(screen.getByText("Color")).toBeVisible();
		expect(screen.getByLabelText("Red")).toBeVisible();
		expect(screen.getByLabelText("Blue")).toBeVisible();

		expect(screen.getByText("Size")).toBeVisible();
		expect(screen.getByLabelText("S")).toBeVisible();
		expect(screen.getByLabelText("M")).toBeVisible();
		expect(screen.getByLabelText("L")).toBeVisible();
	});

	it("selects the first color and size by default", () => {
		render(<VariantSelector colors={colors} sizes={sizes} />);

		expect(screen.getByLabelText("Red")).toBeChecked();
		expect(screen.getByLabelText("S")).toBeChecked();
	});

	it("updates query params when a variant is selected", async () => {
		render(<VariantSelector colors={colors} sizes={sizes} />);

		await userEvent.click(screen.getByLabelText("Blue"));
		expect(mockSetQueryParams).toHaveBeenCalledWith({ color: "Blue" });

		await userEvent.click(screen.getByLabelText("M"));
		expect(mockSetQueryParams).toHaveBeenCalledWith({ size: "M" });
	});

	it("initializes with variants from query params", () => {
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: new URLSearchParams("color=Blue&size=M"),
			setQueryParams: mockSetQueryParams,
		});

		render(<VariantSelector colors={colors} sizes={sizes} />);

		expect(screen.getByLabelText("Blue")).toBeChecked();
		expect(screen.getByLabelText("M")).toBeChecked();
	});

	it("does not deselect a variant when active variant is clicked", async () => {
		render(<VariantSelector colors={colors} sizes={sizes} />);

		expect(screen.getByLabelText("Red")).toBeChecked();
		await userEvent.click(screen.getByLabelText("Red"));
		expect(screen.getByLabelText("Red")).toBeChecked();
		expect(mockSetQueryParams).not.toHaveBeenCalled();

		expect(screen.getByLabelText("S")).toBeChecked();
		await userEvent.click(screen.getByLabelText("S"));
		expect(screen.getByLabelText("S")).toBeChecked();
		expect(mockSetQueryParams).not.toHaveBeenCalled();
	});

	it("renders nothing when no variants are provided", () => {
		const { container } = render(<VariantSelector colors={[]} sizes={[]} />);
		expect(container).toBeEmptyDOMElement();
	});
});
