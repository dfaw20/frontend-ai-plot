import React, { useEffect, useRef } from "react";
import {BACKEND_HOST} from "../network/Api";
import { useNavigate } from "react-router-dom";

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
			fetch(BACKEND_HOST + `/auth/google/callback?code=${code}`)
				.then((response) => response.json())
				.then((data) => {
					console.log("Success Get Token:", data);

					if (data.token) {
					// アクセストークンが正常に取得された場合、ユーザー情報を取得
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