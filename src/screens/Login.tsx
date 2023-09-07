import React from "react";
import {API_GET_GOOGLE_URL, GoogleOAuthUrlObject} from "../network/Api";
import axios from "axios";

function Login() {

	function onClickGoogleLoginButton() {
		axios.get<GoogleOAuthUrlObject>(API_GET_GOOGLE_URL)
			.then(res => {

				console.log(res.data.oauth_url);

				// Googleのログイン画面にリダイレクト
				window.location.replace(res.data.oauth_url);
			});
	}
    
	return (
		<div>
			<button onClick={onClickGoogleLoginButton}>Login with Google!</button>
		</div>
	);
}

export default Login;