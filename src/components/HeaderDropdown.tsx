"use client";
import React, { useState, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
// hooks
import UseClickOutside from "@/hooks/UseClickOutside";
// assets
import bg from "../assets/bg_1.png";
//----------------------------------------------

type DropdownProps = {
	className?: string;
	children: ReactNode;
};

const headerDropdownStyles = {
	container: "relative",
	avatar:
		"relative overflow-hidden h-10 md:h-14 aspect-square bg-primary-1 rounded-full z-10 cursor-pointer hover:opacity-80 duration-200 ease-in-out",
	optionsContainer:
		"absolute top-0 left-1/2 -translate-x-1/2 opacity-0 duration-300 ease-in-out -z-20",
};

//----------------------------------------------
const HeaderDropdown = ({ className, children }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	const clickOutsideRef = UseClickOutside(() => {
		closeDropdown();
	});

	return (
		<div
			ref={(node) => clickOutsideRef(node)}
			className={twMerge(headerDropdownStyles.container, className)}
		>
			<div className={headerDropdownStyles.avatar}>
				<Image
					src={bg}
					alt="avatar_img"
					fill
					className="mt-1"
					onClick={() => toggleDropdown()}
				/>
			</div>

			<div
				className={twMerge(
					headerDropdownStyles.optionsContainer,
					isOpen && "!opacity-100 !top-full !mt-10 z-10"
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default HeaderDropdown;
