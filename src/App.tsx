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
		toppings: ["Mushroom"],
	});

	const handler = () => {
		setGame({ ...game, player: { name: "janu" } });
		setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
	};

	return (
		<div>
			<Like onClick={handler}></Like>

			<Cart cartItem={product} onClick={() => setProduct([])}></Cart>
			<Navbar cartItemCount={product.length}></Navbar>
			<p>{game.player.name}</p>
			<p>{pizza.toppings}</p>
		</div>
	);
}

export default App;
