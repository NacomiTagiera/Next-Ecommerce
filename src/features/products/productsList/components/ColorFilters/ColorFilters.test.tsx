import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useQueryParams } from "@/hooks/useQueryParams";
import { productColors } from "@/lib/constants";

import { ColorFilters } from ".";

jest.mock("@/hooks/useQueryParams", () => ({
	useQueryParams: jest.fn(),
}));

const mockSetQueryParams = jest.fn();

describe("ColorFilters", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: new URLSearchParams(),
			setQueryParams: mockSetQueryParams,
		});
	});

	it("renders all color options", () => {
		render(<ColorFilters />);

		productColors.forEach((color) => {
			expect(screen.getByLabelText(color)).toBeVisible();
		});
	});

	it("selects a color when clicked", async () => {
		render(<ColorFilters />);

		await userEvent.click(screen.getByLabelText("Red"));
		expect(mockSetQueryParams).toHaveBeenCalledWith({ colors: ["Red"] });
	});

	it("deselects a color when clicked again", async () => {
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: new URLSearchParams("colors=Red"),
			setQueryParams: mockSetQueryParams,
		});
		render(<ColorFilters />);

		await userEvent.click(screen.getByLabelText("Red"));
		expect(mockSetQueryParams).toHaveBeenCalledWith({ colors: undefined });
	});

	it("initializes with active colors from query params", () => {
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: new URLSearchParams("colors=Red,Blue"),
			setQueryParams: mockSetQueryParams,
		});
		render(<ColorFilters />);

		expect(screen.getByLabelText("Red")).toBeChecked();
		expect(screen.getByLabelText("Blue")).toBeChecked();
		expect(screen.getByLabelText("Green")).not.toBeChecked();
	});
});
