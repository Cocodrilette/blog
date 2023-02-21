import HeaderLink from "@app/components/links/HeaderLink";
import { NavOptions } from "@app/types/components";
import SocialsIcons from "./socials/SocialsIcons";

export default function Nav() {
  return (
    <nav className="flex max-w-5xl mx-auto md:text-xl  p-5 gap-5 justify-between w-screen">
      <SocialsIcons />
      <div className="flex gap-3">
        <HeaderLink href={NavOptions.Home} content="Home" />
        <div className="text-dimmedPink">/</div>
        <HeaderLink href={NavOptions.Blog} content="Blog" />
      </div>
    </nav>
  );
}
