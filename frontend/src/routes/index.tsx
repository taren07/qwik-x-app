import {
	component$,
	createContextId,
	useContextProvider,
	useStore,
	useTask$,
} from "@builder.io/qwik";
import { Form, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import * as styles from "~/styles/register-form.css";
import { email, type Input, minLength, object, string } from "valibot";
import {
	useForm,
	InitialValues,
	formAction$,
	valiForm$,
} from "@modular-forms/qwik";

const LoginSchema = object({
	email: string([
		minLength(1, "Please enter your email."),
		email("The email address is badly formatted."),
	]),
	password: string([
		minLength(1, "Please enter your password."),
		minLength(8, "Your password must have 8 characters or more."),
	]),
});

export type authUserType = {
	id: string;
};

type LoginForm = Input<typeof LoginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(
	async ({ redirect }) => {
		return {
			email: "",
			password: "",
			// user,
		} as unknown as LoginForm;
	}
);

export const useFormAction = formAction$<LoginForm>(
	async (values, { redirect }) => {
		try {
			await fetch(`http://localhost:8080/signup`, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(values),
			});
		} catch (error: any) {
			console.error(error);
		}
	},
	valiForm$(LoginSchema)
);

export const AuthUserContext = createContextId<authUserType>("AuthUserContext");

export default component$(() => {
	const state = useStore<authUserType>({
		id: "",
	});

	const [loginForm, { Form, Field, FieldArray }] = useForm<LoginForm>({
		loader: useFormLoader(),
		validate: valiForm$(LoginSchema),
		action: useFormAction(),
	});

	useContextProvider(AuthUserContext, state);

	return (
		// <div class={styles.box}>
		<Form class={styles.form}>
			<div class={styles.center}>
				<Field name="email">
					{(field, props) => (
						<div>
							<p class={styles.formTitle}>email</p>
							<input
								{...props}
								type="email"
								value={field.value}
								class={styles.input}
							/>
							{field.error && <div class={styles.errorText}>{field.error}</div>}
						</div>
					)}
				</Field>
			</div>
			<div class={styles.center}>
				<Field name="password">
					{(field, props) => (
						<div>
							<p class={styles.formTitle}>password</p>
							<input
								{...props}
								type="password"
								value={field.value}
								class={styles.input}
							/>
							{field.error && <div class={styles.errorText}>{field.error}</div>}
						</div>
					)}
				</Field>
			</div>
			<div class={styles.center}>
				<button type="submit" class={styles.button}>
					Login
				</button>
			</div>
		</Form>
		// </div>
	);
});

export const head: DocumentHead = {
	title: "Welcome",
	meta: [
		{
			name: "description",
			content: "Tweet site description",
		},
	],
};
