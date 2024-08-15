import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Notification } from ".";

describe("Notification", () => {
	it("displays a message passed to it", () => {
		render(<Notification show message="Hello" onClose={() => {}} />);

		expect(screen.getByText(/Hello/)).toBeVisible();
	});

	it("automatically calls onClose function after some time", async () => {
		jest.useFakeTimers();
		const onCloseMock = jest.fn();

		render(<Notification show message="Hello" duration={100} onClose={onCloseMock} />);

		jest.advanceTimersByTime(100);

		await waitFor(() => {
			expect(onCloseMock).toHaveBeenCalledTimes(1);
		});

		jest.useRealTimers();
	});

	it("calls onClose when the close button is clicked", async () => {
		const onClose = jest.fn();
		render(<Notification show message="Hello" onClose={onClose} />);

		await userEvent.click(screen.getByRole("button"));

		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it("displays a success icon when status is 'success'", () => {
		render(<Notification show message="Hello" onClose={() => {}} status="success" />);

		expect(screen.getByTestId("success-icon")).toBeVisible();
	});

	it("displays an error icon when status is 'error'", () => {
		render(<Notification show message="Hello" onClose={() => {}} status="error" />);

		expect(screen.getByTestId("error-icon")).toBeVisible();
	});

	it("does not appear when 'show' is false", () => {
		render(<Notification show={false} message="Hello" onClose={() => {}} />);

		expect(screen.queryByText(/Hello/)).toBeNull();
	});
});
