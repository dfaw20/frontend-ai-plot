const BACKEND_HOST = "http://localhost:8080";
const API_GET_GOOGLE_URL = BACKEND_HOST + "/auth/google";

export {
	BACKEND_HOST,
	API_GET_GOOGLE_URL,
};

export interface GoogleOAuthUrl {
    oauth_url: string
}
