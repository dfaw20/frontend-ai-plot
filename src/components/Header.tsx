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
			<>
				<Link to="/mypage">{user?.display_name}</Link>
			</>
		);
	case "LOGOUT":
		return (
			<></>
		);
	}
}

export default Header;