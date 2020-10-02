import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>home page</h1>
      <Link to="/profile"> back to profile page</Link>
      <Link to="/editor"> back to editor page</Link>
    </>
  );
};

export default Home;
