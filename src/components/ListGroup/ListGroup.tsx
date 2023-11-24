import { useState } from "react";
// import style from "./ListGroup.module.css";
import "./ListGroup.module.css";
import styled from "styled-components";

interface Props {
	title: string;
	items: string[];
}

interface ListItemProps {
	active: boolean;
}

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
	padding: 5px 0;
	background: ${(props) => (props.active ? "blue" : null)};
`;

const ListGroup = ({ title, items }: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<div>
			<h1>{title}</h1>
			{/* <ul className={[style.listGroup, style.container].join(" ")}> */}
			<List className="listGroup">
				{items.map((item, index) => (
					<ListItem
						active={index === selectedIndex}
						// className={
						// 	selectedIndex === index
						// 		? "list-group-item active"
						// 		: "list-group-item"
						// }
						key={item}
						onClick={() => setSelectedIndex(index)}
					>
						{item}
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default ListGroup;
