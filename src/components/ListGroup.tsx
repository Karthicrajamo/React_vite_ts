import { useState } from "react";

let items = ["London", "New York", "Japan"];

const ListGroup = () => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<div>
			<h1>ListGroup</h1>
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						// className="list-group-item active"
						onClick={() => setSelectedIndex(index)}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListGroup;
