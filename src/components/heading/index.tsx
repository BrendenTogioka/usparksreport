import { type ComponentPropsWithoutRef } from "react";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="text-4xl sm:text-5xl xl:text-6xl leading-normal xl:leading-normal font-bold mt-4 mb-4 "
      {...props}
    />
  );
}
