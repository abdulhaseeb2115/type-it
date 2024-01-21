import React from "react";
import Link from "next/link";
// components
import Section from "./layouts/Section";
import Logo from "./elements/Logo";
import HeaderDropdown from "./HeaderDropdown";
// icons
import HomeIcon from "./icons/HomeIcon";
import RankingIcon from "./icons/RankingIcon";
import UserIcon from "./icons/UserIcon";
import HistoryIcon from "./icons/HistoryIcon";

//----------------------------------------------

const headerStyles = {
	nav: "fixed top-0 left-0 w-full z-50",
	container: "!py-5 3xl:!py-10 w-full flex items-center justify-between",
	link: "p-2 hover:scale-110",
};

//----------------------------------------------
const Header = () => {
	return (
		<nav className={headerStyles.nav}>
			<Section className={headerStyles.container}>
				<Logo />

				<div className="flex items-center gap-12">
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
			</Section>
		</nav>
	);
};

export default Header;
