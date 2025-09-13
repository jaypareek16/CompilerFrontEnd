import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = forwardRef((props, ref) => {
  const templates = {
    Java: `//These is Jay's Personal Compiler
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    Cpp: `//These is Jay's Personal Compiler
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    Python: `#These is Jay's Personal Compiler
def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`,
  };
  const [language, setLanguage] = useState(props.lang);
  const [theme, setTheme] = useState(props.color ? "dark" : "light");
  const [value, setValue] = useState(
    templates[props.lang] || templates["Java"]
  );

  useEffect(() => {
    setTheme(props.color ? "dark" : "light");
  }, [props.color]);

  useEffect(() => {
    setLanguage(props.lang);
    setValue(templates[props.lang] || templates["Java"]);
  }, [props.lang]);

  function handleEditorChange(newValue) {
    setValue(newValue);
    props.handleEditorChange(newValue);
  }

  useImperativeHandle(ref, () => ({
    getCode: () => value,
  }));

  return (
    <Editor
      height={"90vh"}
      width={"98vh"}
      theme={theme === "dark" ? "vs-dark" : "light"}
      language={language.toLowerCase()}
      value={value}
      onChange={handleEditorChange}
    />
  );
});

export default CodeEditor;
