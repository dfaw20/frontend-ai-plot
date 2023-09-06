import React, { useEffect, useRef } from "react";
import {BACKEND_HOST, TokenResult} from "../network/Api";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "../repository/Storage";
import axios from "axios";

function LoginGoogleRedirect() {
	const navigate = useNavigate();

	const didLoadRef = useRef(false);

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
						localStorage.setItem(
							LOCAL_STORAGE_ACCESS_TOKEN_KEY,
							 res.data.token.accessToken
							 );
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