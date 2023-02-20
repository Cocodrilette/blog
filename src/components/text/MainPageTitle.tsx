import { ComponentWithContent } from "@app/types/components/index";

export default function PageTitle({ content }: ComponentWithContent) {
  return (
    <h1 className="md:text-3xl text-2xl drop-shadow-xl">
      {content}
      <span className="text-dimmedPink">_</span>
    </h1>
  );
}
