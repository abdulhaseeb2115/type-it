"use client";

import React, { useState } from "react";
import Link from "next/link";
// components
import Section from "../components/layouts/Section";
import Logo from "../components/elements/Logo";
import HeaderDropdown from "../components/HeaderDropdown";
import Modal from "../components/layouts/Modal";
// icons
import HomeIcon from "../components/icons/HomeIcon";
import RankingIcon from "../components/icons/RankingIcon";
import UserIcon from "../components/icons/UserIcon";
import HistoryIcon from "../components/icons/HistoryIcon";
// type
import { ModalState } from "@/types";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

//----------------------------------------------

const headerStyles = {
	nav: "fixed top-0 left-0 w-full z-50",
	container:
		"relative !py-5 3xl:!py-10 w-full flex items-center justify-between",
	link: "text-sm md:text-base p-2 hover:scale-110",
	rightContainer: "flex items-center gap-12",
};

//----------------------------------------------
const Header = () => {
	const [showModal, setShowModal] = useState<ModalState>(ModalState.Closed);
	let user = false;
	return (
		<nav className={headerStyles.nav}>
			<Section className={headerStyles.container}>
				<Logo />

				{!!user ? (
					<div className={headerStyles.rightContainer}>
						<div className="flex items-end gap-5">
							<Link href="/" className={headerStyles.link}>
								<HomeIcon className="h-5 aspect-square stroke-white" />
							</Link>

							<Link href="/rankings" className={headerStyles.link}>
								<RankingIcon className="h-5 aspect-square fill-white" />
							</Link>
						</div>

						<HeaderDropdown>
							<div className="flex flex-col items-center gap-4">
								<Link href="/profile" className={headerStyles.link}>
									<UserIcon className="h-6 aspect-square stroke-white" />
								</Link>

								<Link href="/history" className={headerStyles.link}>
									<HistoryIcon className="h-6 aspect-square fill-white" />
								</Link>
							</div>
						</HeaderDropdown>
					</div>
				) : (
					<>
						<div className="flex items-center gap-2 md:gap-6">
							<button
								className={headerStyles.link}
								onClick={() => setShowModal(ModalState.Login)}
							>
								Login
							</button>
							<button
								className={headerStyles.link}
								onClick={() => setShowModal(ModalState.Register)}
							>
								Register
							</button>
						</div>

						{/* Login Modal */}
						<Modal
							open={showModal === ModalState.Login}
							onClose={() => setShowModal(ModalState.Closed)}
						>
							<LoginForm
								changeModal={() => setShowModal(ModalState.Register)}
							/>
						</Modal>

						{/* Register Modal */}
						<Modal
							open={showModal === ModalState.Register}
							onClose={() => setShowModal(ModalState.Closed)}
						>
							<RegisterForm
								changeModal={() => setShowModal(ModalState.Login)}
							/>
						</Modal>
					</>
				)}
			</Section>
		</nav>
	);
};

export default Header;
