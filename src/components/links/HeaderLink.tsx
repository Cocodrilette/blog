import { HeaderLinkProps } from "@app/types/components";
import Link from "next/link";

export default function HeaderLink({ href, content }: HeaderLinkProps) {
  return (
    <Link href={href} className="drop-shadow-md">
      {content}
    </Link>
  );
}
