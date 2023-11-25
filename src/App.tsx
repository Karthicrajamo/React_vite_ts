import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Button/Like";
import { FaLeaf } from "react-icons/fa";
import produce from "immer";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ExpandableText from "./components/ExpandableText";
import Forms from "./components/Forms";

function App() {
	const handler = () => {};

	return (
		<div>
			<Like onClick={handler}></Like>
			<ExpandableText maxLength={60} fullText={handler}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
				repellendus ex quibusdam, voluptate architecto quo ipsum harum ratione
				ea. Corporis, consequuntur quaerat beatae debitis quis non culpa facilis
				fuga libero temporibus deserunt veniam consectetur, animi iste facere
				dignissimos aperiam provident ad. Voluptates ducimus nemo saepe iste
				doloremque adipisci eveniet sint!
			</ExpandableText>
			<Forms></Forms>
		</div>
	);
}

export default App;
