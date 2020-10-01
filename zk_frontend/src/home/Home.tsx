import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>home page</h1>
			<Link to="/profile"> back to profile page</Link>
		</>
	);
};

export default Home;
