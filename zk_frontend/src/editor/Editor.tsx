import React, { useState } from "react";
import { Link } from "react-router-dom";
import MarkdownEditor from "rich-markdown-editor";
import debounce from "lodash/debounce";

const Editor: React.FC = () => {
  const [title, setTitle] = useState("");

  const handleChange = debounce((value) => {
    const text = value();
    console.log(text);
    localStorage.setItem("saved", text);
  }, 250);

  return (
    <>
      <h1>editor page</h1>
      <Link to="/home"> back to home page</Link>
      <input
        type="text"
        onChange={(e) => setTitle(e.currentTarget.value)}
        value={title}
      />
      <MarkdownEditor onChange={handleChange} defaultValue={"hello world!"} />
    </>
  );
};

export default Editor;
