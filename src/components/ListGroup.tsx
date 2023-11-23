import { Fragment } from "react";
import { MouseEvent, useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

// function ListGroup(props: Props) {
function ListGroup({ items, heading, onSelectItem }: Props) {
	const [selectedIndex, setselectedIndex] = useState(-1);
	// heading = "";

	return (
		<>
			<h1>{heading}</h1>
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setselectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
