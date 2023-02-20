import { ComponentWithContent } from "@app/types/components/index";

export default function InnerPostH2({ content }: ComponentWithContent) {
  return <h3 className="font-bold md:text-2xl text-xl mt-6 mb-2">{content}</h3>;
}
