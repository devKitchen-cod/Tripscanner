import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Layout from "./Components/Layout";

import { createBrowserHistory } from "history";
import { routes } from "./mock/routes";
function App() {
	const history = createBrowserHistory();
	return (
		<div className="app">
			<Layout>
				<Routes history={history}>
					{routes.map((route, key) => (
						<Route path={route.path} element={route.element} key={key} />
					))}
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
