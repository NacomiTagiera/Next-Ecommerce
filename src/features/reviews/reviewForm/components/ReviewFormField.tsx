import { Input, type InputProps } from "@/components/UI/Input";
import { Label } from "@/components/UI/Label";
import { Textarea, type TextareaProps } from "@/components/UI/Textarea";

interface BaseProps {
	issues?: string[];
}

interface InputFieldProps extends BaseProps, InputProps {
	component?: "input";
}

interface TextareaFieldProps extends BaseProps, TextareaProps {
	component?: "textarea";
}

type Props = InputFieldProps | TextareaFieldProps;

export const ReviewFormField = ({ component = "input", issues, name, ...rest }: Props) => {
	const errorId = `${name}-error`;

	return (
		<div className="w-full space-y-2">
			<Label htmlFor={name} color={issues ? "error" : "primary"} className="capitalize">
				{name}
			</Label>
			{component === "input" ? (
				<Input
					id={name}
					name={name}
					color={issues ? "error" : "primary"}
					className="bg-white"
					aria-describedby={errorId}
					aria-invalid={!!issues}
					{...(rest as InputProps)}
				/>
			) : (
				<Textarea
					id={name}
					name={name}
					color={issues ? "error" : "primary"}
					className="bg-white"
					aria-describedby={errorId}
					aria-invalid={!!issues}
					{...(rest as TextareaProps)}
				/>
			)}
			{issues && (
				<p id={errorId} className="text-sm font-medium text-red-600" aria-live="polite">
					{issues[0]}
				</p>
			)}
		</div>
	);
};
