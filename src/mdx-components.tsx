import type { MDXComponents } from "mdx/types";
import { Heading } from "@/components/heading";
import { Paragraph } from "@/components/paragraph";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
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
