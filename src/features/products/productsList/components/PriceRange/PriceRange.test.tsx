import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { useQueryParams } from "@/hooks/useQueryParams";
import { formatPrice } from "@/lib/utils";

import { priceRangeLimits } from "../../constants";

import { PriceRange } from ".";

jest.mock("@/hooks/useQueryParams", () => ({
	useQueryParams: jest.fn(),
}));

const mockSetQueryParams = jest.fn();

class ResizeObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}

describe("PriceRange", () => {
	window.ResizeObserver = ResizeObserverMock;

	beforeEach(() => {
		jest.clearAllMocks();
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: new URLSearchParams(),
			setQueryParams: mockSetQueryParams,
		});
	});

	it("renders with default price range", () => {
		render(<PriceRange />);

		const [minPrice, maxPrice] = priceRangeLimits;
		expect(screen.getByText(formatPrice(minPrice / 100))).toBeVisible();
		expect(screen.getByText(formatPrice(maxPrice / 100))).toBeVisible();
	});

	it("initializes with values from query params", () => {
		const mockQueryParams = new URLSearchParams("?priceGt=1000&priceLt=15000");
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: mockQueryParams,
			setQueryParams: mockSetQueryParams,
		});

		render(<PriceRange />);

		expect(screen.getByText(formatPrice(10))).toBeVisible();
		expect(screen.getByText(formatPrice(150))).toBeVisible();
	});

	it("uses price range limits when query params are not numbers", () => {
		const mockQueryParams = new URLSearchParams("?priceGt=abc&priceLt=def");
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: mockQueryParams,
			setQueryParams: mockSetQueryParams,
		});

		render(<PriceRange />);

		const [minPrice, maxPrice] = priceRangeLimits;
		expect(screen.getByText(formatPrice(minPrice / 100))).toBeVisible();
		expect(screen.getByText(formatPrice(maxPrice / 100))).toBeVisible();
	});

	it("clamps initial values to price range limits", () => {
		const mockQueryParams = new URLSearchParams("?priceGt=-1000&priceLt=300000");
		(useQueryParams as jest.Mock).mockReturnValue({
			queryParams: mockQueryParams,
			setQueryParams: mockSetQueryParams,
		});

		render(<PriceRange />);

		const [minPrice, maxPrice] = priceRangeLimits;
		expect(screen.getByText(formatPrice(minPrice / 100))).toBeVisible();
		expect(screen.getByText(formatPrice(maxPrice / 100))).toBeVisible();
	});

	it("updates query params when price range changes", async () => {
		jest.useFakeTimers();
		render(<PriceRange />);

		const minThumb = screen.getByTestId("min-thumb");
		fireEvent.focus(minThumb);
		fireEvent.keyDown(minThumb, { key: "ArrowRight" });

		const maxThumb = screen.getByTestId("max-thumb");
		fireEvent.focus(maxThumb);
		fireEvent.keyDown(maxThumb, { key: "ArrowLeft" });

		jest.advanceTimersByTime(500);

		await waitFor(() => {
			expect(mockSetQueryParams).toHaveBeenCalledWith({
				priceGt: (priceRangeLimits[0] + 100).toString(),
				priceLt: (priceRangeLimits[1] - 100).toString(),
			});
		});

		jest.useRealTimers();
	});

	it("debounces query params updates", async () => {
		jest.useFakeTimers();
		render(<PriceRange />);

		const minThumb = screen.getByTestId("min-thumb");
		fireEvent.focus(minThumb);
		fireEvent.keyDown(minThumb, { key: "ArrowRight" });
		fireEvent.keyDown(minThumb, { key: "ArrowRight" });
		fireEvent.keyDown(minThumb, { key: "ArrowRight" });

		jest.advanceTimersByTime(500);

		await waitFor(() => {
			expect(mockSetQueryParams).toHaveBeenCalledTimes(1);
		});

		jest.useRealTimers();
	});
});
