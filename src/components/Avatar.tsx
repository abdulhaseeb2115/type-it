import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
// constants
import { AVATARS } from "@/constants";
//----------------------------------------------

type DropdownProps = {
	avatarId: number;
	size?: number;
	className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const avatarStyles = {
	avatar:
		"relative overflow-hidden h-10 md:h-12 aspect-square bg-primary-1 rounded-full z-10 cursor-pointer hover:opacity-80 duration-200 ease-in-out",
	size: (h: number) => `!h-[${h}]`,
};

//----------------------------------------------
const Avatar = ({ avatarId, size, className, ...props }: DropdownProps) => {
	const avatar = AVATARS[avatarId];
	return (
		<div
			className={twMerge(
				avatarStyles.avatar,
				!!size && avatarStyles.size(size),
				className
			)}
			{...props}
		>
			<Image src={avatar} alt="avatar_img" fill className="mt-1" />
		</div>
	);
};

export default Avatar;
