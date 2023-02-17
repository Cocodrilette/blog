import HeaderLink from "./buttons/HeaderLink";
import { NavOptions } from "@app/types";

export default function Nav() {
  return (
    <nav className="flex max-w-5xl mx-auto md:text-xl  py-3 px-5 gap-5 justify-end w-screen">
      <HeaderLink href={NavOptions.Home} content="Home" />
      <div>/</div>
      <HeaderLink href={NavOptions.About} content="About" />
      <div>/</div>
      <HeaderLink href={NavOptions.Blog} content="Blog" />
    </nav>
  );
}
