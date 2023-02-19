import { ComponentWithContent } from "../../types/components/index";

interface TagProps extends ComponentWithContent {
  key: number;
}

export default function Tag({ content, key }: TagProps) {
  return (
    <p
      key={key}
      className=" bg-dimmedGreen text-black text-sm px-3 py-1 rounded-lg shadow-md shadow-teal-900 min-w-max"
    >
      {content}
    </p>
  );
}
