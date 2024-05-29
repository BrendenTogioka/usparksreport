import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";

import Image from "next/image";
import Link from "next/link";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <div className="max-w-screen-xl	mx-auto">
      <div className="w-full min-h-[70vh] h-full flex flex-col justify-center items-center relative px-2 text-stone-100">
        <div className="h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="font-bold text-3xl text-center mb-4">
            The US Parks Report
          </h1>
          <p className="font-medium text-lg text-center mb-4">
            Your Gateway to the Latest News and Insights on National and State
            Parks
          </p>
          <form action="" className="w-full sm:w-80 px-2">
            <input
              type="text"
              placeholder="Enter a destination..."
              className="block w-full rounded-md border-0 py-2 px-2.5 mb-2 text-lg text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button className="bg-gradient-to-b from-emerald-500 to-emerald-700 text-white w-full py-3 text-xl font-bold rounded-md">
              Explore Our Parks &#128270;
            </button>
          </form>
        </div>
        <div className="w-screen h-full z-0">
          <Image
            src="/assets/hero.png"
            alt="hero"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="bg-stone-900 w-full h-[70vh] opacity-25 absolute z-1"></div>
      </div>

      <div className="w-full h-full  relative px-2 pt-10 pb-20">
        <Posts posts={posts} />
        <div className="w-full mb-10">
          <Pagination
            baseUrl="/page"
            page={1}
            perPage={postsPerPage}
            total={total}
          />
        </div>

        <div className="flex flex-col items-center my-6">
          <h2 className="text-2xl font-bold mb-2">Categories</h2>
          <ul className="flex gap-3 text-lg font-medium uppercase">
            {categories.map((cat) => (
              <li key={cat}>
                <a href={`category/${cat}`}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
