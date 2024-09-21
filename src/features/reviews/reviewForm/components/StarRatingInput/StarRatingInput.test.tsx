import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { StarRatingInput } from ".";

describe("StarRatingInput", () => {
	it("renders five stars with radio buttons", () => {
		render(<StarRatingInput value={0} onChange={() => {}} />);

		expect(screen.getAllByRole("radio")).toHaveLength(5);
		expect(screen.getAllByTestId("rating-star")).toHaveLength(5);
	});

	it("highlights stars based on the initial value", () => {
		render(<StarRatingInput value={3} onChange={() => {}} />);

		const stars = screen.getAllByTestId("rating-star");
		expect(stars[0]).toHaveClass("text-yellow-400");
		expect(stars[1]).toHaveClass("text-yellow-400");
		expect(stars[2]).toHaveClass("text-yellow-400");
		expect(stars[3]).toHaveClass("text-zinc-300");
		expect(stars[4]).toHaveClass("text-zinc-300");
	});

	it("updates rating when a star is clicked", async () => {
		const onChangeMock = jest.fn();
		render(<StarRatingInput value={1} onChange={onChangeMock} />);
		const radios = screen.getAllByRole("radio");

		await userEvent.click(radios[2] as HTMLInputElement);
		expect(onChangeMock).toHaveBeenCalledWith(3);

		await userEvent.click(radios[4] as HTMLInputElement);
		expect(onChangeMock).toHaveBeenCalledWith(5);
	});
});
