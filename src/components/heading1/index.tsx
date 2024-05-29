import { type ComponentPropsWithoutRef } from "react";

export function Heading1(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="text-4xl sm:text-5xl xl:text-6xl leading-normal font-bold mt-4 mb-4 "
      {...props}
    />
  );
}

export function Heading2(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h2
      className="text-2xl sm:text-3xl  leading-normal xl:leading-normal font-bold mt-3 mb-3 "
      {...props}
    />
  );
}
