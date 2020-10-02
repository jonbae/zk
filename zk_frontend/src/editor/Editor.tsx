import React, { useState } from "react";
import { Link } from "react-router-dom";

const Editor: React.FC = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTitle(e.currentTarget.value)}
        value={title}
      />
      <h1>editor page</h1>
      <Link to="/home"> back to home page</Link>
    </>
  );
};

export default Editor;
