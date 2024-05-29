import { type ComponentPropsWithoutRef } from "react";

export function Heading1(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="text-4xl sm:text-5xl xl:text-6xl leading-normal font-bold mt-4 mb-4 "
      {...props}
    />
  );
}

export function Heading2(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="text-2xl sm:text-3xl  leading-normal xl:leading-normal font-bold mt-6 mb-2"
      {...props}
    />
  );
}

export function Heading3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="text-xl sm:text-2xl  leading-normal xl:leading-normal font-bold mt-2 mb-2 text-stone-1000"
      {...props}
    />
  );
}
