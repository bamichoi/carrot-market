import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="open:text-whitle select-none open:bg-indigo-400">
        <summary className="cursor-pointer">what is my fav food</summary>
        <span className="">My fav food is Kimchi</span>
      </details>
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:hover: text-purple-500 file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-400
        file:px-3 file:transition-colors file:hover:border-2 file:hover:bg-white"
      ></input>
      <p className="first-letter:text-7xl first-line:text-teal-500 first-letter:hover:text-purple-400">
        lorem ipsum alalalalalalalalalal
      </p>
    </div>
  );
};

export default Home;
