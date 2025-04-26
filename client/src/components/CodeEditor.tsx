import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { dracula } from "@uiw/codemirror-theme-dracula";
// import socket from "../services/socket";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<"javascript" | "python" | "java">("javascript");

  const languageExtensions: Record<string, any> = {
    javascript: javascript(),
    python: python(),
    java: java(),
  };

  useEffect(() => {
    const handleCodeUpdate = (data: string) => {
      setCode(data);
    };

    //socket.on("code-update", handleCodeUpdate);

    return () => {
     // socket.off("code-update", handleCodeUpdate);
    };
  }, []);

  const handleCodeChange = (value: string) => {
    setCode(value);
    //socket.emit("code-change", value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor="language" className="text-lg font-medium text-gray-700">
          Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as "javascript" | "python" | "java")}
          className="p-2 border border-gra-300 rounded-md"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </div>

      <div className="flex-1">
        <CodeMirror
          value={code}
          height="100%"
          extensions={[languageExtensions[language]]}
          theme={dracula}
          // onChange={(value) => handleCodeChange(value)}
          className="h-full border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
