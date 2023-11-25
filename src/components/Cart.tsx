import React from "react";

interface Props {
	cartItem: string[];
	onClick: () => void;
}

const Cart = ({ cartItem, onClick }: Props) => {
	return (
		<>
			<div>cart:</div>
			<ul>
				{cartItem.map((cart) => (
					<li>{cart}</li>
				))}
				<button onClick={onClick}>Clear</button>
			</ul>
		</>
	);
};

export default Cart;
