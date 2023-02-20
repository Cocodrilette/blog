import { ComponentWithContent } from "../../types/components/index";

export default function InnerPostH2({ content }: ComponentWithContent) {
  return <h2 className="font-bold text-2xl mt-6 mb-2">{content}</h2>;
}
