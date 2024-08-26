import { render, screen } from "@testing-library/react";

import { ProductRating } from ".";

describe("ProductRating", () => {
	it("renders the correct number of active stars based on rating", () => {
		render(<ProductRating rating={3.5} />);

		const stars = screen.getAllByTestId("rating-star");
		expect(stars.length).toBe(5);
		const activeStars = stars.filter((star) => star.classList.contains("text-yellow-400"));
		expect(activeStars.length).toBe(4);
	});

	it("displays the rating with one decimal place for medium size", () => {
		render(<ProductRating rating={3.456} size="md" />);

		expect(screen.getByText("3.5")).toBeVisible();
	});

	it("displays the rating with two decimal places for large size", () => {
		render(<ProductRating rating={3.456} size="lg" />);

		expect(screen.getByText("3.46")).toBeVisible();
	});

	it("hides the rating text when hideRating is true", () => {
		render(<ProductRating rating={3.5} hideRating />);

		expect(screen.getByText("3.5")).toHaveClass("sr-only");
	});

	it("handles null rating by displaying '0.0' and no active stars", () => {
		render(<ProductRating rating={null} />);

		expect(screen.getByText("0.0")).toBeVisible();

		const stars = screen.getAllByTestId("rating-star");
		const activeStars = stars.filter((star) => star.classList.contains("text-yellow-400"));
		expect(activeStars.length).toBe(0);
	});

	it("handles undefined rating by displaying '0.0' and no active stars", () => {
		render(<ProductRating />);

		expect(screen.getByText("0.0")).toBeVisible();

		const stars = screen.getAllByTestId("rating-star");
		const activeStars = stars.filter((star) => star.classList.contains("text-yellow-400"));
		expect(activeStars.length).toBe(0);
	});
});
