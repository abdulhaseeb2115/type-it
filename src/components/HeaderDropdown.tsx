"use client";
import React, { useState, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
// hooks
import UseClickOutside from "@/hooks/UseClickOutside";
// constants
import { AVATARS } from "@/constants";
import Avatar from "./Avatar";
//----------------------------------------------

type DropdownProps = {
	className?: string;
	children: ReactNode;
};

const headerDropdownStyles = {
	container: "relative",
	optionsContainer:
		"absolute top-0 left-1/2 -translate-x-1/2 opacity-0 duration-300 ease-in-out -z-20",
};

const avatarId = 4;

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
			<Avatar avatarId={avatarId} onClick={toggleDropdown} />
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
