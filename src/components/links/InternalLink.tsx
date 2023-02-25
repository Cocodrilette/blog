import { ExternalLinksProps } from "../../types/components/index";
import Link from "next/link";

export default function InternalLink({ content, href }: ExternalLinksProps) {
  return (
    <Link className="text-dimmedPink hover:underline" href={href}>
      {content}
    </Link>
  );
}
