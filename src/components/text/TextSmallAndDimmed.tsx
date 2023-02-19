import { TextSmallAndDimmedProps } from "@app/types/components/index";

export default function TextSmallAndDimmed({
  children,
}: TextSmallAndDimmedProps) {
  return <p className="text-sm text-textDimmed">{children}</p>;
}
