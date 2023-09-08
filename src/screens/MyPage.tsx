import React from "react";
import { useUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function MyPage() {
	const {logout} = useUser();

	function onClickLogout() {
		logout();
		
	}

	return (
		<div>
			<div>マイページ</div>
			<Link to="/characters">キャラ一覧</Link>
			<button onClick={onClickLogout}>ログアウト</button>
		</div>
	);
}

export default MyPage;