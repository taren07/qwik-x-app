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
	uid: string;
	photoUrl: string;
	displayName: string;
	subscribe: boolean;
};

type LoginForm = Input<typeof LoginSchema> & { user: authUserType };

export const useFormLoader = routeLoader$<
	InitialValues<LoginForm> & { user: authUserType }
>(async ({ redirect }) => {
	return {
		email: "",
		password: "",
		// user,
	} as unknown as LoginForm;
});

export const useFormAction = formAction$<LoginForm>(
	async (values, { redirect }) => {
		const { email, password } = values;
		try {
			// const authUser = await (
			// 	auth,
			// 	email,
			// 	password
			// );
		} catch (error: any) {
			console.error(error);
		}
	},
	valiForm$(LoginSchema)
);

export const AuthUserContext = createContextId<authUserType>("AuthUserContext");

export default component$(() => {
	const state = useStore<authUserType>({
		uid: "",
		photoUrl: "",
		displayName: "",
		subscribe: false,
	});

	const [loginForm, { Form, Field, FieldArray }] = useForm<LoginForm>({
		loader: useFormLoader(),
		validate: valiForm$(LoginSchema),
		action: useFormAction(),
	});

	const data = useFormLoader();

	useTask$(async ({ track }) => {
		track(() => data.value.user);
		state.uid = data.value.user.uid;
		state.photoUrl = data.value.user.photoUrl;
		state.displayName = data.value.user.displayName;
		state.subscribe = data.value.user.subscribe;
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
