import React from "react";
import styles from "./Button.module.css";
import { FcLike } from "react-icons/fc";

interface Props {
	children: string;
	onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
	return (
		<div>
			<button
				type="button"
				className={[styles.btn, styles["btn-primary"]].join(" ")}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
