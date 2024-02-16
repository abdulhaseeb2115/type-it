import React from "react";
//----------------------------------------------

type Props = {
	changeModal: VoidFunction;
};

const loginFormStyles = {
	container: "h-full w-full flex flex-col items-center justify-center gap-6",
	formGroup: "w-4/6 flex flex-col gap-2",
	input:
		"bg-transparent border-b-2 border-white py-0.5 text-sm tracking-wide focus:outline-none focus:shadow-none",
	button: "bg-primary-1 px-8 py-2 mt-10 rounded-full",
	smallText: "text-sm mt-2",
	smallTextButton:
		"underline cursor-pointer hover:opacity-80 duration-200 ease-in-out",
};

//----------------------------------------------
const LoginForm = ({ changeModal }: Props) => {
	return (
		<form
			className={loginFormStyles.container}
			onSubmit={(e) => e.preventDefault()}
		>
			<div className={loginFormStyles.formGroup}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="abc@xyz.com"
					className={loginFormStyles.input}
					required
				/>
			</div>

			<div className={loginFormStyles.formGroup}>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="********"
					className={loginFormStyles.input}
					required
				/>
			</div>

			<button className={loginFormStyles.button} type="submit">
				Login
			</button>

			<p className={loginFormStyles.smallText}>
				<span className="opacity-70">Don&apos;t have an account?</span>
				&nbsp; &nbsp;
				<span
					className={loginFormStyles.smallTextButton}
					onClick={() => changeModal()}
				>
					Register
				</span>
			</p>
		</form>
	);
};

export default LoginForm;
