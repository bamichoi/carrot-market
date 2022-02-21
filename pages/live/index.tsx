import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="space-y-4 divide-y-2 py-10">
      {[1, 2, 3, 4, , 5].map((_, i) => (
        <div key={i} className="px-4 pt-4">
          <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
          <h3 className="mt-2 text-lg text-gray-700">Let&apos;s try potatos</h3>
        </div>
      ))}
      <button className="marker: fixed bottom-24 right-5 cursor-pointer rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500">
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Live;
