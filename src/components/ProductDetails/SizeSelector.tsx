import { cn } from "@/lib/utils";

type Props = {
	sizes: string[];
	activeSize: string;
	onSizeChange: (size: string) => void;
};

export const SizeSelector = ({ sizes, activeSize, onSizeChange }: Props) => {
	if (!sizes.length) return null;

	const validActiveSize = sizes.includes(activeSize) ? activeSize : sizes[0];

	return (
		<div className="mt-8">
			<h3 className="text-sm font-medium">Size</h3>
			<fieldset className="mt-2">
				<legend className="sr-only">Choose a size</legend>
				<div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
					{sizes.map((size, index) => (
						<label
							key={size}
							className={cn(
								"flex cursor-pointer items-center justify-center rounded-md border border-zinc-200 bg-white px-3 py-3 text-sm font-medium uppercase hover:bg-zinc-50 focus:outline-none sm:flex-1",
								{
									"border-transparent bg-skyfall-500 text-white hover:bg-skyfall-400":
										size === validActiveSize,
								},
							)}
						>
							<input
								type="radio"
								name="size-choice"
								value={size}
								checked={validActiveSize === size}
								aria-labelledby={`size-choice-${index}-label`}
								onChange={() => onSizeChange(size)}
								className="sr-only"
							/>
							<span id={`size-choice-${index}-label`}>{size}</span>
						</label>
					))}
				</div>
			</fieldset>
		</div>
	);
};
