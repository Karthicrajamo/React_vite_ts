import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
	const [AlertVisible, setAlertVisible] = useState(false);

	return (
		<div>
			{/* {AlertVisible === true && (
				<Alert onClose={() => setAlertVisible(false)}>hello</Alert>
			)}
			<Button onClick={() => setAlertVisible(true)}>Post</Button> */}
			<ListGroup></ListGroup>
		</div>
	);
}

export default App;
