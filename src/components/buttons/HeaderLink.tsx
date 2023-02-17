import { NavOptions } from "@app/types";
import Link from "next/link";

export interface HeaderLink {
  href: NavOptions;
  content: string;
}

export default function HeaderLink({ href, content }: HeaderLink) {
  return (
    <Link href={href} className="drop-shadow-md">
      {content}
    </Link>
  );
}
