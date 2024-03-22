import { useFormStatus } from "react-dom";
import { LuLoader } from "react-icons/lu";

import { cn } from "@/lib/utils";

import { Button } from "../UI/Button";

export const ReviewFormSubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			aria-disabled={pending}
			className={cn("px-8", pending && "cursor-wait")}
			size="fullWidth"
		>
			{pending ? (
				<>
					<LuLoader className="me-2 size-5 animate-spin" aria-hidden /> Processing...
				</>
			) : (
				"Submit Review"
			)}
		</Button>
	);
};
