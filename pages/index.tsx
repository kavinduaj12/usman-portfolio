// import styles from "styles/Home.module.css";
import Layout from "components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="container mx-auto selection:bg-blue-200 selection:text-black">
        <div className="flex justify-evenly items-center flex-col md:flex-row">
          <div>
            <Image
              src="/usman.jpg"
              width={250}
              height={250}
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl mb-3">
              Hello there! I'm <b>Kavindu AJ</b>
            </h2>
            <p className="text-xl">
              👋 My name is <b>Kavindu A Jeywardana 😇</b>, a{" "}
              <span style={{ color: "#007acc" }}>web developer</span> from
              Sri Lanka.
              <br />
              👨‍💻 I love programming and that led me to meet many awesome people
              and friends. <br /> I learnt{" "}
              <span style={{ color: "#DD4C25" }}>Python</span>,{" "}
              <span style={{ color: "#DD9C25" }}>JavaScript</span>,{" "}
              <span style={{ color: "#0076C6" }}>TypeScript</span>,{" "}
              <span style={{ color: "#37D1F7" }}>node.js</span> and many other
              awesome things. <br /> My other interests include playing volleyball 🏐
              and doing match 🥳
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
