import Link from "next/link";
import SocialsButtons from "../commons/socials/SocialButtons";
import {BsArrowRightShort} from "react-icons/bs"

export default function HowIAm() {
  return (
    <div className="mb-20">
      <h2 className="md:text-5xl text-3xl drop-shadow-xl mb-10 font-extrabold text-slate-100">
        Hey there! I&apos;m Juan
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          Blockchain developer
        </p>
        <Link href="/blog" className="inline-flex items-center underline transition-all gap-1 hover:gap-2 w-fit mt-10 text-xl">Go to posts <BsArrowRightShort/></Link>
        <SocialsButtons />
      </div>
    </div>
  );
}
