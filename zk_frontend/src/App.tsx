import React from "react";
import logo from "./logo.svg";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Profile from "./profile/Profile";
import Home from "./home/Home";

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.tsx</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<Link to="/profile">to profile page</Link>
// 			</header>
// 		</div>
// 	);
// }

const App = () => (
	<>
		<Switch>
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/" component={Home} />
		</Switch>
	</>
);

export default App;
