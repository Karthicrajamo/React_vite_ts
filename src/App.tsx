import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Button/like";

function App() {
	const [AlertVisible, setAlertVisible] = useState(false);
	let items = ["London", "New York", "Japan"];

	return (
		<div>
			{/* {AlertVisible === true && (
				<Alert onClose={() => setAlertVisible(false)}>hello</Alert>
			)}
			<Button onClick={() => setAlertVisible(true)}>Post</Button> */}
			{/* <ListGroup title="List" items={items}></ListGroup> */}
			<Like></Like>
		</div>
	);
}

export default App;
