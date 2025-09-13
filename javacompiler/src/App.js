import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import CodeEditor from "./Components/CodeEditor";
import OutputScreen from "./Components/OutputScreen";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("Java");
  const [editorData, setEditorData] = useState("");
  const [outputData, setOutputData] = useState("");
  const editorRef = useRef();

  function handleToggle(value) {
    setIsDark(value);
  }

  async function runFile() {
    const code = editorRef.current.getCode();
    setEditorData(code);
    const languageType = language.toLowerCase();
    const inputFile = new File(
      [code],
      `Main.${language === "Python" ? "py" : language.toLowerCase()}`,
      {
        type: "text/plain",
      }
    );
    const formData = new FormData();
    formData.append("language", languageType);
    formData.append("file", inputFile);
    formData.append("outputDir", "output");

    const res = await fetch("http://localhost:8080/compile", {
      method: "POST",
      body: formData,
    });
    const output = await res.text();
    setOutputData(output);
  }

  function handleLanguageChange(lang) {
    setLanguage(lang);
  }
  function handleEditorChange(value) {
    setEditorData(value);
  }

  return (
    <>
      <Header
        handleClick={runFile}
        handleLanguageChange={handleLanguageChange}
        handleToggle={handleToggle}
      />
      <div style={{ display: "flex", width: "100vw" }}>
        <CodeEditor
          ref={editorRef}
          lang={language}
          color={isDark}
          handleEditorChange={handleEditorChange}
        />
        <OutputScreen color={isDark} data1={outputData} />
      </div>
    </>
  );
}

export default App;
