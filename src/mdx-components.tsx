import type { MDXComponents } from "mdx/types";
import { Heading } from "@/components/heading";
import { Paragraph } from "@/components/paragraph";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    p: Paragraph,
    ...components,
  };
}
