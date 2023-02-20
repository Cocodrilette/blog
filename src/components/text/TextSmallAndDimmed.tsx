import { ComponentWithChildren } from "@app/types/components/index";

export default function TextSmallAndDimmed({
  children,
}: ComponentWithChildren) {
  return <p className="text-sm text-textDimmed">{children}</p>;
}
