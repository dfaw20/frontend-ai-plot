import React from "react";
import { Link } from "react-router-dom";

function CharacterList() {
	return (
		<>
			<div>キャラクター</div>
			<Link to="/characters/create">キャラ作成</Link>
		</>
	);
}

export default CharacterList;