"use client";
import React, { useState, ReactNode } from "react";
// hooks
import UseClickOutside from "@/hooks/UseClickOutside";
import Image from "next/image";
//
import bg from "../assets/bg_1.png";
//----------------------------------------------

type DropdownProps = {
	className?: string;
	children: ReactNode;
};

const headerDropdownStyles = {
	container: "relative",
	avatar:
		"relative bg-primary-1 rounded-full p-0.5 pb-0 z-10 cursor-pointer hover:opacity-80 duration-200 ease-in-out",
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
			className={headerDropdownStyles.container + ` ${className}`}
		>
			<Image
				src={bg}
				height={60}
				width={60}
				className={headerDropdownStyles.avatar}
				alt="avatar_img"
				onClick={() => toggleDropdown()}
			/>

			<div
				className={
					headerDropdownStyles.optionsContainer +
					` ${isOpen && " !opacity-100 !top-full !mt-10 z-10"}`
				}
			>
				{children}
			</div>
		</div>
	);
};

export default HeaderDropdown;
