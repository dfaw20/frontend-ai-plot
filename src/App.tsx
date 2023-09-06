import React from "react";
import "./App.css";
import Login from "./components/Login";
import LoginGoogleRedirect from "./components/LoginGoogleRedirect";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { UserProvider } from './contexts/UserContext';
import Header from "./components/Header";
import LoginStateRestore from "./components/LoginStateRestore";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<UserProvider>
					<LoginStateRestore/>
					<Header/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/login" element={<Login user={null}/>} />
						<Route path="/auth/google/callback" element={<LoginGoogleRedirect />} />
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
