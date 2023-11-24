import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import React, { useState } from "react";

interface Props {
	onClick: () => void;
}

const Like = ({ onClick }: Props) => {
	const [like, setLike] = useState(false);

	const toggle = () => {
		setLike(!like);
		onClick();
	};

	if (like === true) {
		return <FaHeart color="#ff6b81" onClick={toggle} />;
	} else {
		return (
			<>
				<CiHeart onClick={toggle} />
			</>
		);
	}
};

export default Like;
