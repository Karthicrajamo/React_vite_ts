import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Button/Like";
import { FaLeaf } from "react-icons/fa";
import produce from "immer";

function App() {
	const [AlertVisible, setAlertVisible] = useState(false);
	let items = ["London", "New York", "Japan"];

	const [drink, setDrink] = useState({
		title: "Water",
		price: 6,
	});

	const [tags, setTags] = useState(["happy", "Joy"]);

	const [bugs, setBugs] = useState([
		{ id: 1, title: "Bug 1", fixed: false },
		{ id: 2, title: "Bug 2", fixed: false },
	]);

	const handler = () => {
		// setDrink({ ...drink, price: 4 });

		//Add
		// setTags([...tags, "cheer"]);
		// setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
		setBugs(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);
				if (bug) bug.fixed = true;
			})
		);

		//Delete
		// setTags(tags.filter((tag) => tag !== "Joy"));

		//Update
		// setTags(tags.map((tag) => (tag == "Joy" ? "Enjoy" : tag)));
	};

	return (
		<div>
			{/* {AlertVisible === true && (
				<Alert onClose={() => setAlertVisible(false)}>hello</Alert>
			)}
			<Button onClick={() => setAlertVisible(true)}>Post</Button> */}
			{/* <ListGroup title="List" items={items}></ListGroup> */}
			<Like onClick={handler}></Like>

			{/* ################################################################# */}

			{/* {drink.price} */}
			{/* {tags} */}
			{bugs.map((bug) => (
				<p key={bug.id}>
					{bug.title} {bug.fixed == true ? "fixed" : "new"}
				</p>
			))}
		</div>
	);
}

export default App;
