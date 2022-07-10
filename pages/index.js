import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { marked } from "marked";
export default function Home() {
  const [file, setFile] = useState(null);
  const [fileText, setFileText] = useState("");
  const [json, setJson] = useState({});
  const [parseDone, setParseDone] = useState(false);
  useEffect(() => {
    if (fileText.length > 0) {
      console.log(marked.parse(fileText));
      const html = marked.parse(fileText);
      const parser = new DOMParser();

      const dom = parser.parseFromString(html, "text/html");
      const title = dom.querySelector("h1").innerText;
      setJson((json) => ({ ...json, title }));
      setJson((json) => ({ ...json, scenes: [] }));
      Array.from(dom.querySelectorAll("h3")).forEach((ele) => {
        const textContent = ele.textContent.trimEnd();
        if (textContent.includes("Scene")) {
          const index = textContent
            .split(" ")[1]
            .substring(0, textContent.split(" ")[1].length - 1);
          const nextChild = ele.nextElementSibling;
          const text = nextChild?.innerHTML;
          const img =
            nextChild.nextElementSibling.firstChild.getAttribute("src");
          console.log(index);
          setJson((json) => {
            const scenesArray = [...json.scenes];
            scenesArray[index - 1] = { text, img };
            return { ...json, scenes: scenesArray };
          });
        }
      });
      setParseDone(true);
    }
  }, [fileText]);

  useEffect(() => {
    if (parseDone === true) console.log(json);
  }, [parseDone]);

  function handleFile(e) {
    setFileText(e.target.result);
  }
  function handleFileSubmit() {
    console.log(file);
    const reader = new FileReader(file);
    reader.onloadend = handleFile;
    reader.readAsText(file, "utf-8");
  }
  return (
    <div className={styles.container}>
      <input
        type="file"
        accept=".md, .markdown"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleFileSubmit}>Submit</button>

      <pre>{JSON.stringify(json)}</pre>
    </div>
  );
}
