import React from "react";
import "./App.css";
import Login from "./components/Login";
import LoginGoogleRedirect from "./components/LoginGoogleRedirect";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<header className="App-header">
			</header>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/login" element={<Login user={null}/>} />
					<Route path="/auth/google/callback" element={<LoginGoogleRedirect />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
