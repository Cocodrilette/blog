import HeaderLink from "@app/components/links/HeaderLink";
import { NavOptions } from "@app/types/components";

export default function Nav() {
  return (
    <nav className="flex max-w-5xl mx-auto md:text-xl  p-5 gap-5 justify-end w-screen">
      <HeaderLink href={NavOptions.Home} content="Home" />
      <div className="text-dimmedPink">/</div>
      <HeaderLink href={NavOptions.About} content="About" />
      <div className="text-dimmedPink">/</div>
      <HeaderLink href={NavOptions.Blog} content="Blog" />
    </nav>
  );
}
