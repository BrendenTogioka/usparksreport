import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";

import Image from "next/image";
import Link from "next/link";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

export default async function About() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <div className="max-w-screen-3xl	mx-auto">
      <div className="w-full min-h-[70vh] h-full flex flex-col justify-center items-center relative px-2 text-stone-100">
        <div className="h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="font-bold text-3xl md:text-5xl xl:text-7xl text-center mb-4 ">
            About The US Parks Report
          </h1>
          <p className="font-medium text-lg xl:text-xl text-center mb-4">
            We are avid nature lovers and are working to protect and
            rehabilitate our country&apos;s environment.
          </p>
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
    </div>
  );
}
