import { useForm } from "@tanstack/react-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FormField } from "../components/form/FormField";

export const FormLogin = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { email: "", password: "" };
    },
  });

  const saveUserMutation = useMutation({
    mutationFn: async (value: { email: string; password: string }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Save mutation',value);
      return value;
    },
  });

  const form = useForm({
    defaultValues: {
      email: data?.email ?? "",
      password: data?.password ?? "",
    },
    onSubmit: async ({ value }) => {
      await saveUserMutation.mutateAsync(value);
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Login example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {/* Campo Email */}
        <FormField
          form={form}
          name="email"
          label="Email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Email is required"
                : value.length < 3
                ? "Email must be at least 3 characters"
                : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") && "Invalid email content.";
            },
          }}
        />

        {/* Campo Password */}
        <FormField
          form={form}
          name="password"
          label="Password"
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        />
      </form>
    </div>
  );
};
