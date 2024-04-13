import { cn } from "@/lib/utils";

type Props = {
	colors: string[];
	activeColor: string;
	onColorChange: (color: string) => void;
};

export const ColorPicker = ({ colors, activeColor, onColorChange }: Props) => {
	if (!colors.length) return null;

	const validActiveColor = colors.includes(activeColor) ? activeColor : colors[0];

	return (
		<>
			<h3 className="text-sm font-medium">Color</h3>
			<fieldset className="mt-2">
				<legend className="sr-only">Choose a color</legend>
				<div className="flex items-center space-x-3">
					{colors.map((color, index) => (
						<label
							key={color}
							className={cn(
								`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-[${color}] focus:outline-none`,
								{
									"ring ring-offset-1": color === validActiveColor,
								},
							)}
							style={{ boxShadow: color === validActiveColor ? `0 0 0 3px ${color}` : "" }}
						>
							<input
								type="radio"
								name="color-choice"
								value={color}
								aria-labelledby={`color-choice-${index}-label`}
								onClick={() => onColorChange(color)}
								className="sr-only"
							/>
							<span id={`color-choice-${index}-label`} className="sr-only">
								{color}
							</span>
							<span
								aria-hidden
								className={cn(`h-8 w-8 rounded-full border border-opacity-10`)}
								style={{ backgroundColor: color, borderColor: color }}
							></span>
						</label>
					))}
				</div>
			</fieldset>
		</>
	);
};
