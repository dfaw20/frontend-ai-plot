import React from "react";
import { useUser } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

function Header() {

	const {loginStatus, user} = useUser();

	switch (loginStatus) {
	case "INIT":
		return <></>;
	case "LOGIN":
		return (
			<header className="App-header">
				<Link to="/mypage">{user?.display_name}</Link>
			</header>
		);
	case "LOGOUT":
		return (
			<header className="App-header">
				<Link to="/login">ログイン</Link>
			</header>
		);
	}
}

export default Header;