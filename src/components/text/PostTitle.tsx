import { ComponentWithContent } from "../../types/components/index";

export default function PostTitle({ content }: ComponentWithContent) {
  return <h1 className="md:text-4xl text-2xl font-bold ">{content}</h1>;
}
