import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import socket from "../services/socket";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on("code-update", (data) => {
      setCode(data);
    });
  }, []);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    socket.emit("code-change", value);
  };

  return (
    <CodeMirror
      value={code}
      options={{ mode: "javascript", theme: "dracula", lineNumbers: true }}
      onBeforeChange={handleCodeChange}
    />
  );
};

export default CodeEditor;
