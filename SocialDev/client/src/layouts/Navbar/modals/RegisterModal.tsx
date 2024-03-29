import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "lib/authProvider";

const RegisterModal: React.FC = (props) => {
	const { currentUser, updateCurrentUser, register } = useContext(AuthContext);
	const [handle, setHandle] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const cancelButtonRef = useRef(null);

	const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// @ts-ignore
		const mutateResult = register.mutate({ email, password });
		if (mutateResult) {
			const { status, mutate } = mutateResult;
			if (status === "loading") {
				// show a loading indicator
			} else if (status === "error") {
				// show an error message to the user
			} else if (status === "success") {
				// @ts-ignore
				// close the modal and update the current user
				updateCurrentUser(props.onClose);
			}
		}
	};

	useEffect(() => {}, [updateCurrentUser]);

	return (
		<>
			<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<button
					type="button"
					className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					data-modal-toggle="authentication-modal" // @ts-ignore
					onClick={() => props.onClose()}
					ref={cancelButtonRef}
				>
					<svg
						aria-hidden="true"
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
					<span className="sr-only">Close modal</span>
				</button>
				<div className="py-6 px-6 lg:px-8">
					<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						Create your account
					</h3>
					<form className="space-y-6" action="#" onSubmit={handleRegister}>
						<div>
							<label
								htmlFor="username"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your user handle
							</label>
							<input
								value={handle}
								onChange={(e) => setHandle(e.target.value)}
								type="text"
								name="username"
								id="username"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="John Doe"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="name@company.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your password
							</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>

						{/* {error} */}

						<button
							type="submit"
							className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Create Account
						</button>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
							Already have an account?{" "}
							<a
								href="/"
								className="text-blue-700 hover:underline dark:text-blue-500"
								// @ts-ignore
								onClick={(e) => props.switchForms()}
							>
								Login
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default RegisterModal;
