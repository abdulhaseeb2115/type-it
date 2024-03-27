import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
// types
import ChevronRightIcon from "../icons/ChevronRightIcon";
// hooks
import UseClickOutside from "@/hooks/UseClickOutside";
// components
import GlassmorphismCard from "../GlassmorphismCard";

//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
	open: boolean;
	onClose: VoidFunction;
};

const modalStyles = {
	modal:
		"absolute top-0 right-0 w-[350px] md:w-[500px] h-fit m-4 flex flex-col z-[9999] duration-500 ease-in-out",
	closed: "translate-x-[200%]",
	container:
		"relative h-full py-16 3xl:py-24 rounded-xl shadow-2xl shadow-black",
	button:
		"absolute top-0 right-1 p-1 hover:opacity-70 duration-200 ease-in-out",
	buttonIcon: "h-8 aspect-square stroke-white",
};

//----------------------------------------------
const Modal = ({ children, className, open, onClose }: Props) => {
	const closeModal = () => {
		onClose();
	};

	const clickOutsideRef = UseClickOutside(() => {
		onClose();
	});

	return (
		<div
			className={twMerge(
				modalStyles.modal,
				!open && modalStyles.closed,
				className
			)}
			ref={(node) => clickOutsideRef(node)}
		>
			<GlassmorphismCard className={modalStyles.container}>
				<button className={modalStyles.button} onClick={closeModal}>
					<ChevronRightIcon className={modalStyles.buttonIcon} />
				</button>
				{children}
			</GlassmorphismCard>
		</div>
	);
};

export default Modal;
