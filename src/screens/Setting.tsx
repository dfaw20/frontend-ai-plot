import React from "react";
import { useUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function Setting() {
	const {logout} = useUser();

	function onClickLogout() {
		logout();
		
	}

	return (
		<div>
			<div>設定</div>
			<button onClick={onClickLogout}>ログアウト</button>
		</div>
	);
}

export default Setting;