import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialsButtons() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <a
        className="flex gap-2 items-center w-[200px] bg-[#1da1f2] p-2 justify-between rounded-md border-2 shadow-md shadow-black"
        href="https://twitter.com/cocodrilette"
        target="_blank"
        rel="noreferrer"
      >
        Twitter <BsTwitter className="text-slate-100 text-xl" />
      </a>
      <a
        className="flex gap-2 items-center w-[200px] bg-[#161b22] p-2 justify-between rounded-md border-2 shadow-md shadow-black"
        href="https://github.com/Cocodrilette"
        target="_blank"
        rel="noreferrer"
      >
        Github <BsGithub className="text-slate-100 text-xl" />
      </a>
      <a
        className="flex gap-2 items-center w-[200px] bg-[#0a66c2] p-2 justify-between rounded-md border-2 shadow-md shadow-black"
        href="https://www.linkedin.com/in/juan-fernando-cogollo-doria/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
        <BsLinkedin className="text-slate-100 text-xl" />
      </a>
    </div>
  );
}
