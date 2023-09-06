import React from "react";
import { useUser } from '../contexts/UserContext';

function Header() {
	const {user} = useUser();

	return (
		<header className="App-header">
			{user === null ? 'ログイン' : user.display_name}
		</header>
	);
}

export default Header;