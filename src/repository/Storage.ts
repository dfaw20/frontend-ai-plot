const LOCAL_STORAGE_ACCESS_TOKEN_KEY = "'aiplotapp_Google_accessToken'";

export {
	LOCAL_STORAGE_ACCESS_TOKEN_KEY
};

export function makeBearerToken(): string | null {
	const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
	if (accessToken) {
		return `Bearer ${accessToken}`;
	}

	return null;
}
