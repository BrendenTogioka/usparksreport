import { type ComponentPropsWithoutRef } from "react";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className="text-2xl font-bold mt-4 mb-4" {...props} />;
}
