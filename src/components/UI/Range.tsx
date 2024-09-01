import * as Slider from "@radix-ui/react-slider";

interface Props {
	min: number;
	max: number;
	value: [number, number];
	onChange: (value: [number, number]) => void;
	step?: number;
	minDistance?: number;
	label?: string;
}

export const Range = ({ min, max, value, onChange, step = 1, minDistance = 1, label }: Props) => {
	const limitedMin = Math.max(min, value[0]);
	const limitedMax = Math.min(max, value[1]);

	return (
		<Slider.Root
			minStepsBetweenThumbs={minDistance}
			step={step}
			value={[limitedMin, limitedMax]}
			min={min}
			max={max}
			aria-label={label}
			onValueChange={onChange}
			className="relative flex h-5 w-full cursor-pointer touch-none select-none items-center"
		>
			<Slider.Track className="relative flex h-[3px] grow rounded-full bg-zinc-400">
				<Slider.Range className="absolute h-full rounded-full bg-skyfall-500" />
			</Slider.Track>
			<Slider.Thumb className="block size-5 rounded-full bg-skyfall-500" />
			<Slider.Thumb className="block size-5 rounded-full bg-skyfall-500" />
		</Slider.Root>
	);
};
