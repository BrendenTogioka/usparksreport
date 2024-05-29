import { type Post } from "@/posts";
import Link from "next/link";
import Image from "next/image";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full h-full  relative px-2 pt-10 pb-20 text-stone-1000">
      <ol className="flex flex-col gap-10 md:grid md:grid-cols-2 max-w-screen-xl mx-auto">
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
                  width={800}
                  height={400}
                  className="object-cover rounded-t-md"
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
