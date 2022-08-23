import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./writer.module.css";

import words from "../../data.json";
import { deleteKey, visibleKey } from "../hotkeys";

function Writer() {
  const [data, setData] = useState("");
  const [isTextHidden, setTextHidden] = useState(true);
  const [print, setPrint] = useState(false);

  function getData(val: React.ChangeEvent<HTMLInputElement>) {
    setPrint(false);
    setData(val.target.value);
  }

  const makeVisible = () => setTextHidden(!isTextHidden);

  function deleteContent() {
    setPrint(false);
    setData("");
  }

  // hotkeys to make an alternative to the buttons
  const hotkeys = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && event.ctrlKey) {
      makeVisible();
    }

    if (event.code === "Backspace" && event.ctrlKey) {
      deleteContent();
    }
  };

  // utility stuff and security checks
  useEffect(() => {
    if (data.length > 500) {
      setPrint(true);
      setData("");
    }
    words.map((word) => {
      if (data.includes(word)) {
        setPrint(true);
        setData("");
        setData("YOU ARE IMPORTANT!");
      }
    });
  }, [data]);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.main}>
          <input
            className={styles.input}
            type="text"
            onKeyDown={hotkeys}
            value={isTextHidden ? data : ""}
            onChange={(e) => getData(e)}
          ></input>
          <p className={styles.text}>{isTextHidden ? data : ""}</p>
        </div>

        <button className={styles.deletebutton} onClick={deleteContent}>
          Delete
        </button>
        <button className={styles.hidebutton} onClick={makeVisible}>
          {isTextHidden ? "Hide" : "Show"}
        </button>

        <div className={styles.navbar}>
          <Link href={"/why"}>
            <a>Why?</a>
          </Link>
          <Link href={"/who"}>
            <a>Who?</a>
          </Link>
          <Link href={"/privacy"}>
            <a>Privacy</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Writer;
