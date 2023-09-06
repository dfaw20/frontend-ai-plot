import React from "react";
import { useUser } from "../contexts/UserContext";

function MyPage() {
	const {logout} = useUser();

	function onClickLogout() {
		logout();
	}

	return (
		<div>
			<div>マイページ</div>
			<button onClick={onClickLogout}>ログアウト</button>
		</div>
	);
}

export default MyPage;