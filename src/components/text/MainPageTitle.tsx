import { ComponentWithContent } from "@app/types/components/index";

export default function PageTitle({ content }: ComponentWithContent) {
  return (
    <h1 className="md:text-3xl text-xl drop-shadow-xl">
      <span className="text-dimmedPink">_</span>
      {content}
      <span className="text-dimmedPink">_</span>
    </h1>
  );
}
