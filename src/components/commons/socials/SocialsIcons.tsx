import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialsIcons() {
  return (
    <div className="flex gap-3 items-center">
      <a
        href="https://twitter.com/cocodrilette"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter className="text-slate-100" />
      </a>
      <a
        href="https://github.com/Cocodrilette"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className="text-slate-100" />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-fernando-cogollo-doria/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-slate-100" />
      </a>
    </div>
  );
}
