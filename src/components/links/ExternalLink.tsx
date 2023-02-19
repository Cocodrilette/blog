import { ExternalLinksProps } from "../../types/components/index";
export default function ExternalLink({ content, href }: ExternalLinksProps) {
  return (
    <a
      className="text-blue-400 hover:underline"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
