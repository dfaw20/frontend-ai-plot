import React from "react";
import "./App.css";
import Login from "./components/Login";
import LoginGoogleRedirect from "./components/LoginGoogleRedirect";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { UserProvider } from './contexts/UserContext';
import Header from "./components/Header";
import LoginStateRestore from "./components/LoginStateRestore";
import MyPage from "./components/MyPage";
import { RouteAuthGuard } from "./routes/RouteAuthGuard";
import { RouteGuestGuard } from "./routes/RouteGuestGuard";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<UserProvider>
					<LoginStateRestore/>
					<Header/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/mypage" 
							element={<RouteAuthGuard component={<MyPage />} redirect={"/login"} />}/>
						<Route path="/login"
							element={<RouteGuestGuard component={<Login user={null}/>} redirect={"/mypage"} />}
						/>
						<Route path="/auth/google/callback"
							element={<RouteGuestGuard component={<LoginGoogleRedirect />} redirect={"/mypage"} />}
						/>
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
