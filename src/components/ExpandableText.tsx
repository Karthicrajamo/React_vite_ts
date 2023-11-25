import React, { useState } from "react";

interface Props {
	children: string;
	maxLength?: number;
	fullText: () => void;
}

const ExpandableText = ({ children, maxLength = 10, fullText }: Props) => {
	const [state, setState] = useState(false);

	if (children.length <= maxLength) <p>{children}</p>;
	const text = state === false ? children.substring(0, maxLength) : children;
	return (
		<div>
			<p>
				{text}...
				<button onClick={() => setState(!state)}>
					{state === true ? "less" : "more"}
				</button>
			</p>
		</div>
	);
};

export default ExpandableText;
