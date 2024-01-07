import { ComponentWithChildren } from "@app/types/components";

export function Container5xl({ children }: ComponentWithChildren) {
  return <div className="flex flex-col mx-auto px-5 max-w-5xl">{children}</div>;
}
