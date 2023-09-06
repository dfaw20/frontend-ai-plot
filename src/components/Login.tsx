import React, { useEffect, useState } from "react";
import {User} from "../types/User";

function Login() {
	const [user, setUser] = useState<User|null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// OAuth2認証フローのリダイレクト後、アクセストークンを取得するためのコード
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get("code");

		if (code) {
			// OAuth2認証コードが存在する場合、バックエンドに送信してアクセストークンを取得
			fetch(`/auth/google/callback?code=${code}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.token) {
						// アクセストークンが正常に取得された場合、ユーザー情報を取得
						setUser(data.user);
					}
				})
				.catch((error) => {
					console.error("Error fetching token:", error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		// ユーザーがログインしていない場合、OAuth2認証ボタンを表示
		return (
			<div>
				<h1>Login with Google</h1>
				<a href="/auth/google">Login with Google</a>
			</div>
		);
	}

	// ユーザーがログインしている場合、ユーザー情報を表示
	return (
		<div>
			<h1>Welcome, {user.displayName}</h1>
			{/* ここにユーザー情報を表示するコードを追加 */}
		</div>
	);
}

export default Login;