import { Input, type InputProps } from "../Input";
import { Label } from "../Label";
import { Textarea, type TextareaProps } from "../Textarea";

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

export const FormField = ({ component = "input", issues, name, ...rest }: Props) => {
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
					aria-invalid={!!issues?.length}
					aria-errormessage={errorId}
					{...(rest as InputProps)}
				/>
			) : (
				<Textarea
					id={name}
					name={name}
					color={issues ? "error" : "primary"}
					aria-invalid={!!issues?.length}
					aria-errormessage={errorId}
					{...(rest as TextareaProps)}
				/>
			)}
			{!!issues?.length && (
				<p id={errorId} className="text-center text-xs text-red-800" aria-live="assertive">
					{issues[0]}
				</p>
			)}
		</div>
	);
};
