import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useRouter } from "next/navigation";

import { Overlay } from ".";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.Mock;

describe("Overlay Component", () => {
	beforeEach(() => {
		mockedUseRouter.mockReset();
		document.body.classList.remove("overflow-hidden");
	});

	it("renders with the correct initial state", () => {
		render(<Overlay />);

		const overlay = screen.getByTestId("overlay");
		expect(overlay).toBeVisible();
		expect(document.body.classList.contains("overflow-hidden")).toBe(true);
	});

	it("adds overflow-hidden to the body when mounted and removes it when unmounted", () => {
		const { unmount } = render(<Overlay />);
		expect(document.body.classList.contains("overflow-hidden")).toBe(true);

		unmount();
		expect(document.body.classList.contains("overflow-hidden")).toBe(false);
	});

	it("does not add overflow-hidden class multiple times on double mount", () => {
		const { unmount, rerender } = render(<Overlay />);
		rerender(<Overlay />);
		expect(document.body.classList.contains("overflow-hidden")).toBe(true);

		unmount();
		expect(document.body.classList.contains("overflow-hidden")).toBe(false);
	});

	it("calls router.back() when the Escape key is pressed", async () => {
		const backMock = jest.fn();
		mockedUseRouter.mockReturnValue({ back: backMock });

		render(<Overlay />);

		await userEvent.keyboard("{Escape}");

		expect(backMock).toHaveBeenCalledTimes(1);
	});

	it("calls router.back() when the overlay is clicked", async () => {
		const backMock = jest.fn();
		mockedUseRouter.mockReturnValue({ back: backMock });

		render(<Overlay />);

		await userEvent.click(screen.getByTestId("overlay"));

		expect(backMock).toHaveBeenCalledTimes(1);
	});

	it("does not call router.back() when keys other than Escape are pressed", async () => {
		const backMock = jest.fn();
		mockedUseRouter.mockReturnValue({ back: backMock });

		render(<Overlay />);

		await userEvent.keyboard("{Enter}");
		await userEvent.keyboard("{a}");
		await userEvent.keyboard("{ArrowDown}");

		expect(backMock).not.toHaveBeenCalled();
	});

	it("cleans up event listeners and body class when unmounted", () => {
		const backMock = jest.fn();
		mockedUseRouter.mockReturnValue({ back: backMock });

		const { unmount } = render(<Overlay />);

		const eventListenerSpy = jest.spyOn(document, "removeEventListener");

		unmount();

		expect(eventListenerSpy).toHaveBeenCalledWith("keydown", expect.any(Function));
		expect(document.body.classList.contains("overflow-hidden")).toBe(false);

		eventListenerSpy.mockRestore();
	});
});
