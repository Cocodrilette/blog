import { ComponentWithContent } from "@app/types/components";

export default function PostTitle({ content }: ComponentWithContent) {
  return <h1 className="md:text-4xl text-3xl font-bold ">{content}</h1>;
}
