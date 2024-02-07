import Image from "next/image";
import styles from "./page.module.css";
import ComponentIII from "@/components/Component3";
import Component2 from "@/components/Component2";
import Component1 from "@/components/Component1";
import Link from "next/link";


// Main Component
function Home() {

  let flag = false;

  return (
    <main className={styles.customCss}>
      <ComponentIII text="Hello Component III from main" />
      {
        flag && <Component1 />
        // if flag true, it shows Component1.
        // Can be replaced with-> flag ? <Component1 /> : null
      }
      <Component2 />
      <br />
      <Link href={'/counter'}>Go to Counter Page</Link>
      <br></br>
      <div style={{ color: "red", backgroundColor: "black" }}>Inline CSS</div>
      <Link href={'/about'}>Go to about</Link>
      <br></br>
      <a href={'/about'}>Go to about</a>
    </main>
  );
}
// 42:35
export default Home;