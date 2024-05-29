import { type ComponentPropsWithoutRef } from "react";

export function Paragraph(props: ComponentPropsWithoutRef<"p">) {
  return <p className="text-md mb-4" {...props} />;
}
