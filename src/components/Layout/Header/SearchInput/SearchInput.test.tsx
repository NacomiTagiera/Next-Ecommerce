import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useRouter, useSearchParams } from "next/navigation";

import { SearchInput } from ".";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
	useSearchParams: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.Mock;
const mockedUseSearchParams = useSearchParams as jest.Mock;

describe("SearchInput", () => {
	beforeEach(() => {
		mockedUseRouter.mockReset();
		mockedUseSearchParams.mockReset();
	});

	it("initializes with search query from URL", () => {
		mockedUseRouter.mockReturnValue({ push: jest.fn() });
		mockedUseSearchParams.mockReturnValue({
			get: jest.fn().mockReturnValue("initial query"),
		});

		render(<SearchInput id="search" />);

		expect(screen.getByDisplayValue("initial query")).toBeVisible();
	});

	it("updates the input value when the user types", async () => {
		mockedUseSearchParams.mockReturnValue({
			get: jest.fn().mockReturnValue(""),
		});

		render(<SearchInput id="search" />);

		const input = screen.getByRole("searchbox");

		await userEvent.type(input, "query");
		expect(input).toHaveValue("query");
	});

	it("executes debounced search and updates URL when input is long enough", async () => {
		const pushMock = jest.fn();
		mockedUseRouter.mockReturnValue({ push: pushMock });
		mockedUseSearchParams.mockReturnValue({
			get: jest.fn().mockReturnValue(""),
		});

		render(<SearchInput id="search" />);

		const input = screen.getByRole("searchbox");
		await userEvent.type(input, "query");

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith("/search?query=query");
		});
	});

	it("does not update URL when input is too short", async () => {
		const pushMock = jest.fn();
		mockedUseRouter.mockReturnValue({ push: pushMock });
		mockedUseSearchParams.mockReturnValue({
			get: jest.fn().mockReturnValue(""),
		});

		render(<SearchInput id="search" />);

		const input = screen.getByRole("searchbox");
		await userEvent.type(input, "ab");

		await waitFor(() => {
			expect(pushMock).not.toHaveBeenCalled();
		});
	});

	it("applies custom className", () => {
		mockedUseSearchParams.mockReturnValue({
			get: jest.fn().mockReturnValue(""),
		});

		render(<SearchInput id="search" className="class" />);

		expect(screen.getByTestId("search-input-wrapper")).toHaveClass("class");
	});
});
