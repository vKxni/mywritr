import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./writer.module.css";

function Writer() {
  const [data, setData] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [print, setPrint] = useState(false);

  function getData(val: React.ChangeEvent<HTMLInputElement>) {
    setPrint(false);
    setData(val.target.value);
  }

  // once the entered texts length is over 500
  // reset the data and entered text
  useEffect(() => {
    if (data.length > 500) {
      setPrint(true);
      setData("");
    }
  }, [data]);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.main}>
          <input
            className={styles.input}
            type="text"
            value={data}
            onChange={getData}
          ></input>
          <p className={styles.text}>{data}</p>
        </div>

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
