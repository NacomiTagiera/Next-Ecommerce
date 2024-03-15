import React from "react";
import { type FieldPath, type FieldValues, useFormContext } from "react-hook-form";

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

export const FormFieldContext = React.createContext<FormFieldContextValue>(
	{} as FormFieldContextValue,
);

export const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	return { ...fieldContext, fieldState };
};
