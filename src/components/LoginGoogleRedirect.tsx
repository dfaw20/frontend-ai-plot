import React, { useEffect, useRef } from "react";
import {BACKEND_HOST, TokenResult} from "../network/Api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from '../contexts/UserContext';

function LoginGoogleRedirect() {
	const navigate = useNavigate();
	const didLoadRef = useRef(false);
	const { login } = useUser();

	useEffect(() => {
		if (didLoadRef.current === false) {
			didLoadRef.current = true;

			// OAuth2認証フローのリダイレクト後、アクセストークンを取得するためのコード
			const urlParams = new URLSearchParams(window.location.search);
			const code = urlParams.get("code");

			// OAuth2認証コードが存在する場合、バックエンドに送信してアクセストークンを取得
			axios
				.get<TokenResult>(BACKEND_HOST + `/auth/google/callback?code=${code}`)
				.then((res) => {
					console.log("Success Get Token:", res.data);

					if (res.data.token) {
						login(res.data);
						navigate('/');
					}
				})
				.catch((error) => {
					console.error("Error fetching token:", error);
				});
		}
	}, []);

	return (
		<div>
			redirect
		</div>
	);
}

export default LoginGoogleRedirect;