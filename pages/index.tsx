import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 bg-slate-400 py-20 px-20">
      <div className=" rounded-3xl bg-white p-6 shadow-2xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="my-2 mb-3 flex justify-between odd:bg-blue-50 even:bg-yellow-500"
            >
              <span className="text-gray-500">Gry Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mx-auto mt-5 block w-3/4 rounded-xl bg-blue-500 p-3 text-center 
        text-white hover:bg-teal-500 hover:text-black focus:bg-red-500 active:bg-yellow-500"
        >
          checkout
        </button>
      </div>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400 transition-colors group-hover:bg-blue-50" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅️</span>
          <div className="space-x-3 ">
            <span>4.9</span>
            <span className="rounded-md p-2 shadow-xl ">💖</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="bg-opacity-2 h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2"></button>
              <button className="bg-opacity-2 h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2"></button>
              <button className="bg-opacity-2 h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="flex aspect-square w-10 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl font-medium text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-10 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl font-medium text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-medium">$450</span>
          <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-white">
            Add to cart
          </button>
        </div>
      </div>
      <form className="flex flex-col space-y-2 bg-white p-5">
        {/*  <input
          type="text"
          required
          placeholder="Username"
          className="border-yellow-500 placeholder:text-red-500 placeholder-shown:bg-teal-500 required:border-2
        required:bg-yellow-500 valid:bg-teal-500 invalid:bg-red-500 disabled:opacity-0"
        />  */}
        <input
          type="text"
          required
          placeholder="username"
          className="brder-gray-400 peer rounded-md border p-1"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-green-500">
          This input is valid
        </span>
        <span className="hidden peer-valid:text-amber-500 peer-hover:block">
          This input is valid
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </div>
  );
};

export default Home;
