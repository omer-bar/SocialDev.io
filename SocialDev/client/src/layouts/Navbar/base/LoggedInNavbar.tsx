import React, { Fragment, useEffect, useContext } from "react";
import { AuthContext } from "lib/authProvider";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
// @ts-ignore
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const LoggedInNavbar: React.FC = () => {
	const { currentUser, updateCurrentUser, signOut } = useContext(AuthContext);

	// const { data, error } = getCurrentUser();

	// const { doRequest, errors } = useRequest({
	// 	url: "/api/auth/signout",
	// 	method: "post",
	// 	body: {},
	// });

	useEffect(() => {}, [currentUser]);

	return (
		<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 border-none">
			{/* Search bar */}

			<form action="" className="relative mx-auto w-max">
				<input
					type="search"
					className="cursor-pointer relative z-10 h-12 w-12 rounded-full bg-transparent outline-none focus:w-full focus:bg-white border-none"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute inset-y-0 my-auto h-8 w-12 stroke-gray-400 px-3.5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</form>

			{/* Notifications */}
			<button
				type="button"
				className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
			>
				<span className="sr-only">View notifications</span>
				<BellIcon className="h-6 w-6" aria-hidden="true" />
			</button>

			{/* Profile dropdown */}
			<Menu as="div" className="relative ml-3">
				<div>
					<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
						<span className="sr-only">Open user menu</span>
						<img
							className="h-8 w-8 rounded-full"
							src="/avatar-image-example.jpg"
							alt=""
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<Menu.Item>
							{({ active }) => (
								<a
									href="/"
									className={classNames(
										active ? "bg-gray-100" : "",
										"block px-4 py-2 text-sm text-gray-700"
									)}
								>
									Your Profile
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="/"
									className={classNames(
										active ? "bg-gray-100" : "",
										"block px-4 py-2 text-sm text-gray-700"
									)}
								>
									Settings
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? "bg-gray-100" : "",
										"block px-4 py-2 text-sm text-gray-700"
									)}
									onClick={(event) => {
										event.preventDefault();
										// @ts-ignore
										signOut.mutate();
									}}
								>
									Sign out
								</a>
							)}
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default LoggedInNavbar;
