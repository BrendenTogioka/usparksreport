import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, getPosts, postsPerPage } from "@/posts";
import { categories } from "@/categories";

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <section>
      <div className="mx-4 mt-8 mb-10 lg:mb-20 max-w-screen-md md:mx-auto">
        <div>{children}</div>
      </div>

      <div className="w-full h-full  relative px-2 pt-10 pb-20  border-t border-stone-900">
        <h2 className="font-bold text-2xl md:text-4xl text-center mb-4 uppercase">
          Recent Posts
        </h2>
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
    </section>
  );
}
