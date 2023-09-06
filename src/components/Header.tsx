import React from "react";
import { useUser } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

function Header() {

	const {user} = useUser();

	if (user === null) {
		return (
			<header className="App-header">
				<Link to="/login">ログイン</Link>
			</header>
		);	
	} else {
		return (
			<header className="App-header">
				<Link to="/mypage">{user.display_name}</Link>
			</header>
		);
	}
}

export default Header;