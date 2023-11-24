import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import React, { useState } from "react";

const Like = () => {
	const [like, setLike] = useState(false);

	if (like === true) {
		return <FaHeart color="#ff6b81" onClick={() => setLike(false)} />;
	} else {
		return <CiHeart onClick={() => setLike(true)} />;
	}
};

export default Like;
