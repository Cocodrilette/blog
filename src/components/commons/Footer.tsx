import ExternalLink from "@app/components/links/ExternalLink";

export default function Footer() {
  return (
    <footer className="flex gap-2 p-5 border-t border-beige mt-20">
      <span>Build with 💚 by</span>
      <ExternalLink
        content="Cocodrilette"
        href="https://github.com/Cocodrilette"
      />
    </footer>
  );
}
