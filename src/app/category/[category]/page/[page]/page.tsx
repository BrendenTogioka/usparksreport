import { Category, categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import {
  getPaginatedPostsByCategory,
  getPostsByCategory,
  postsPerPage,
} from "@/posts";
import { notFound, redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { category: Category; page: number };
}) {
  let { category, page } = params;
  page = Number(page);

  if (page < 1) notFound();

  if (page == 1) redirect(`/category/${category}`);

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page,
    limit: postsPerPage,
  });

  if (!posts.length) notFound();

  return (
    <div className="">
      <h1 className="text-4xl sm:text-5xl xl:text-6xl leading-normal xl:leading-normal font-bold mt-4 mb-4 ">
        {category}
      </h1>
      <Posts posts={posts} />

      <Pagination
        baseUrl={`/category/${category}/page`}
        page={page}
        perPage={postsPerPage}
        total={total}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = await Promise.all(
    categories.map(async (category) => {
      const posts = await getPostsByCategory({ category });
      const pages = Math.ceil(posts.length / postsPerPage);

      return [...Array(pages)].map((_, i) => ({
        category,
        page: `${i + 1}`,
      }));
    })
  );

  return paths.flat();
}
