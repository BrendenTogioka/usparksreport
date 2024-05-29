import { type Post } from "@/posts";
import Link from "next/link";
import Image from "next/image";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full h-full  relative px-2 pt-10 pb-20 text-stone-1000">
      <h2 className="font-bold text-2xl text-center mb-4 uppercase">
        Recent Posts
      </h2>
      <ol className="flex flex-col gap-10">
        {posts.map(
          ({
            slug,
            title,
            publishDate,
            categories,
            featuredImage,
            description,
          }) => (
            <li
              className="flex flex-col rounded-md shadow-2xl w-full "
              key={slug}
            >
              <div className=" mb-3">
                <Image
                  src={featuredImage}
                  alt={title}
                  width={400}
                  height={400}
                  className="aspect-square object-cover rounded-t-md"
                />
              </div>
              <div className="p-2 mb-1 flex flex-col">
                <h3 className="font-bold text-2xl mb-2">{title}</h3>
                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(publishDate).toLocaleDateString()}{" "}
                  <strong>Categories:</strong>{" "}
                  {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
                </p>
                <p className="mb-2">{description}</p>
                <Link
                  href={`/${slug}`}
                  className="px-8 py-3  text-xl font-bold text-center rounded-md bg-emerald-700 text-stone-100"
                >
                  Read More
                </Link>
              </div>
            </li>
          )
        )}
      </ol>
    </div>
  );
}
