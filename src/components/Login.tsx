import React from "react";
import {User} from "../types/User";
import {API_GET_GOOGLE_URL, GoogleOAuthUrl} from "../network/Api";
import axios from "axios";

interface Prop {
    user: User | undefined
}

function Login(props: Prop) {

	function onClickGoogleLoginButton() {
		axios.get<GoogleOAuthUrl>(API_GET_GOOGLE_URL)
			.then(res => {

				console.log(res.data.oauth_url);

				// Googleのログイン画面にリダイレクト
				window.location.replace(res.data.oauth_url);
			});
	}
    

	if (!props.user) {
		// ユーザーがログインしていない場合、OAuth2認証ボタンを表示
		return (
			<div>
				<button onClick={onClickGoogleLoginButton}>Login with Google!</button>
			</div>
		);
	}

	// ユーザーがログインしている場合、ユーザー情報を表示
	return (
		<div>
			<h1>Welcome, {props.user.displayName}</h1>
			{/* ここにユーザー情報を表示するコードを追加 */}
		</div>
	);
}

export default Login;