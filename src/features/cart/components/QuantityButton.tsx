import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
	type: "plus" | "minus";
	disabled: boolean;
	formAction: () => Promise<void>;
}

export const QuantityButton = ({ type, disabled, formAction }: Props) => (
	<button
		type="submit"
		aria-label={type === "plus" ? "Increment item quantity" : "Reduce item quantity"}
		aria-disabled={disabled}
		className="flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-opacity hover:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
		formAction={formAction}
	>
		{type === "plus" ? (
			<FaPlus className="size-3 text-zinc-700" />
		) : (
			<FaMinus className="size-3 text-zinc-700" />
		)}
	</button>
);
