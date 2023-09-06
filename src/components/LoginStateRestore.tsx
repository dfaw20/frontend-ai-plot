import React, { useEffect } from "react";
import { useUser } from '../contexts/UserContext';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "../repository/Storage";
import axios from 'axios';
import { API_USER_INFO_URL, UserResult } from "../network/Api";

function LoginStateRestore() {
	const {login} = useUser();

	useEffect(() => {
		const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
		if (accessToken) {
			axios
				.get<UserResult>(API_USER_INFO_URL, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					}
				})
				.then(res => {
					login(res.data.user);
				});
		}
	}, []);	

	return (
		<></>
	);
}

export default LoginStateRestore;