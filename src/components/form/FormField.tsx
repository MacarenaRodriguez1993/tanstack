import type { FieldApi } from "@tanstack/react-form";
import { FieldInfo } from "./FieldInfo";

interface FormFieldProps {
  form: any;
  name: string;
  label: string;
  validators?: FieldApi<any, any, any, any>["validators"];
}

export const FormField = ({ form, name, label, validators }: FormFieldProps) => {
  return (
    <form.Field
      name={name}
      validators={validators}
      children={(field) => (
        <>
          <label htmlFor={field.name}>{label}:</label>
          <input
            id={field.name}
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
          <FieldInfo field={field} />
        </>
      )}
    />
  );
};
