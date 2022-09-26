import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import StartPage from "./Pages/start-page";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<StartPage />} />
				</Routes>         
			</Layout>
		</div>
	);
}

export default App;
