import React, { ReactNode } from "react";
// types
import { ModalState } from "@/types";
import ChevronRightIcon from "../icons/ChevronRightIcon";

//----------------------------------------------

type Props = {
	children: ReactNode;
	className?: string;
	open: boolean;
	onClose: VoidFunction;
};

const modalStyles = {
	modal:
		"absolute top-0 right-0 w-[500px] h-fit m-4 p-2 flex flex-col rounded-xl bg-dark-1 bg-opacity-20 backdrop-blur-lg border border-dark-1 border-opacity-40 shadow-2xl shadow-black z-[9999] duration-500 ease-in-out",
	closed: "translate-x-[200%]",
	container: "relative h-full py-16 3xl:py-24",
	button:
		"absolute top-0 right-0 p-1 hover:opacity-70 duration-200 ease-in-out",
	buttonIcon: "h-8 aspect-square stroke-white",
};

//----------------------------------------------
const Modal = ({ children, className, open, onClose }: Props) => {
	const closeModal = () => {
		onClose();
	};

	return (
		<aside
			className={
				modalStyles.modal + ` ${!open && modalStyles.closed}` + ` ${className}`
			}
		>
			<div className={modalStyles.container}>
				<button className={modalStyles.button} onClick={closeModal}>
					<ChevronRightIcon className={modalStyles.buttonIcon} />
				</button>
				{children}
			</div>
		</aside>
	);
};

export default Modal;
