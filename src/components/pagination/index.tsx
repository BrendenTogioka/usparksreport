import Link from "next/link";

export function Pagination({
  baseUrl,
  page,
  perPage,
  total,
}: {
  baseUrl: string;
  page: number;
  perPage: number;
  total: number;
}) {
  return (
    <div className="text-xl font-medium flex justify-center gap-4 mb-10">
      {page !== 1 && (
        <>
          <Link
            href={`${baseUrl}/${page - 1}`}
            rel="prev"
            className="border border-stone-700 py-2 px-4 rounded-md"
          >
            Previous
          </Link>{" "}
        </>
      )}
      {perPage * page < total && (
        <Link
          href={`${baseUrl}/${page + 1}`}
          rel="next"
          className="border border-stone-700 py-2 px-4 rounded-md"
        >
          Next
        </Link>
      )}
    </div>
  );
}
