import Link from "next/link";
import Nav from "components/Nav";
// import styles from "styles/Header.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center to-blue-500 from-purple-600 bg-gradient-to-l p-5 text-white mb-8 selection:bg-indigo-400 selection:text-gray-200">
      <h1 className="text-4xl md:text-5xl m-1">
        <Link href="/">
          <a>𝐊𝐚𝐯𝐢𝐧𝐝𝐮 𝐀𝐉</a>
        </Link>
      </h1>
      <h3 className="text-xl md:text-3xl m-2 text-center">
        <span className="text-green-200">𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿</span>.{" "}
        <span className="text-purple-200">𝗦𝘁𝘂𝗱𝗲𝗻𝘁</span>.{" "}
        <span className="text-yellow-200">𝗖𝗼𝗻𝘁𝗲𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗼𝗿</span>
      </h3>
      <Nav />
    </header>
    // <header className={styles.header}>
    //   <h1>
    //     <Link href="/">
    //       <a>Usman Sabuwala</a>
    //     </Link>
    //   </h1>
    //   <h3>
    //     <span style={{ color: "#c586c0" }}>Developer</span>.{" "}
    //     <span style={{ color: "#569cd6" }}>Student</span>.{" "}
    //     <span style={{ color: "#aaaa81" }}>Content Creator</span>
    //   </h3>
    // </header>
  );
}
