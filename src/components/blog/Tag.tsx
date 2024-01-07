import { ComponentWithContent } from "../../types/components/index";

export function Tag({ content }: ComponentWithContent) {
  return (
    <p className=" bg-dimmedGreen text-black text-sm px-3 py-1 rounded-lg shadow-md shadow-teal-900 min-w-max">
      {content}
    </p>
  );
}
