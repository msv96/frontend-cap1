import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route to="/" exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
