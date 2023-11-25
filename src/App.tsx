import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Button/Like";
import { FaLeaf } from "react-icons/fa";
import produce from "immer";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
	const [AlertVisible, setAlertVisible] = useState(false);

	const [product, setProduct] = useState(["Product1", "Product2"]);

	const [game, setGame] = useState({
		id: 1,
		player: {
			name: "john",
		},
	});

	const [pizza, setPizza] = useState({
		name: "Spicy Pepperoni",
		toppings: ["Mushroom", "jam"],
	});

	const [cart, setCart] = useState({
		discount: 1,
		items: [
			{
				id: 1,
				title: "Product 1",
				quantity: 1,
			},
			{
				id: 2,
				title: "Product 2",
				quantity: 1,
			},
		],
	});

	const handler = () => {
		setGame({ ...game, player: { name: "janu" } });
		setPizza({
			...pizza,
			toppings: pizza.toppings.map((top) =>
				top === "Mushroom" ? "cheese" : top
			),
		});
		setCart({
			...cart,
			items: cart.items.map((item) =>
				item.id === 2 ? { ...item, quantity: 2 } : item
			),
		});
	};

	return (
		<div>
			<Like onClick={handler}></Like>

			<Cart cartItem={product} onClick={() => setProduct([])}></Cart>
			<Navbar cartItemCount={product.length}></Navbar>
			<p>{game.player.name}</p>
			<p>{pizza.toppings}</p>
			{cart.items.map((item) => (
				<p key={item.id}>
					{item.title}-{item.quantity}
				</p>
			))}
		</div>
	);
}

export default App;
