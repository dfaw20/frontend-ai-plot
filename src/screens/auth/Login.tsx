import React from "react"
import {apiGetGoogle} from "../../network/Api"
import axios from "axios"
import { GoogleOAuthUrlObject } from "../../entities/Auth"

function Login() {

	function onClickGoogleLoginButton() {
		axios.get<GoogleOAuthUrlObject>(apiGetGoogle())
			.then(res => {

				console.log(res.data.oauth_url)

				// Googleのログイン画面にリダイレクト
				window.location.replace(res.data.oauth_url)
			})
	}
    
	return (
		<div className="flex justify-center items-center h-screen">
			<button
			 onClick={onClickGoogleLoginButton}>
				<img src="google/btn_google_signin_dark_normal_web@2x.png"/>
			</button>
		</div>
	)
}

export default Login