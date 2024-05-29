import type { MDXComponents } from "mdx/types";
import { Heading1, Heading2, Heading3 } from "@/components/heading";
import { Paragraph } from "@/components/paragraph";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    p: Paragraph,
    img: (props) => (
      <Image
        sizes="100vw"
        width={800}
        height={600}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
