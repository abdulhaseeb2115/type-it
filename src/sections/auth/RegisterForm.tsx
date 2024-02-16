import React from "react";
//----------------------------------------------

type Props = {
	changeModal: VoidFunction;
};

const registerFormStyles = {
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
const RegisterForm = ({ changeModal }: Props) => {
	return (
		<form
			className={registerFormStyles.container}
			onSubmit={(e) => e.preventDefault()}
		>
			<div className={registerFormStyles.formGroup}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="xyz"
					className={registerFormStyles.input}
					required
				/>
			</div>

			<div className={registerFormStyles.formGroup}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="abc@xyz.com"
					className={registerFormStyles.input}
					required
				/>
			</div>

			<div className={registerFormStyles.formGroup}>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="********"
					className={registerFormStyles.input}
					required
				/>
			</div>

			<div className={registerFormStyles.formGroup}>
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					type="password"
					id="confirmPassword"
					placeholder="********"
					className={registerFormStyles.input}
					required
				/>
			</div>

			<button className={registerFormStyles.button} type="submit">
				Register
			</button>

			<p className={registerFormStyles.smallText}>
				<span className="opacity-70">Already have an account?</span>
				&nbsp; &nbsp;
				<span
					className={registerFormStyles.smallTextButton}
					onClick={() => changeModal()}
				>
					Login
				</span>
			</p>
		</form>
	);
};

export default RegisterForm;
