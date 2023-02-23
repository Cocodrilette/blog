import SocialsButtons from "../commons/socials/SocialButtons";
import ExternalLink from "../links/ExternalLink";

export default function HowIAm() {
  return (
    <div className="mb-20">
      <h2 className="md:text-5xl text-3xl drop-shadow-xl mb-10 font-extrabold text-slate-100">
        Hey there! I&apos;m Juan
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          A law and computer science student that loves code. Now I&apos;m
          center in Web 3 development (Solidity mostly) but constantly I&apos;m
          learning about backend with Node.js (I like{" "}
          <ExternalLink content="Nest" href="https://docs.nestjs.com/" />
          ).
        </p>
        <p>
          What about Frontend may you be thinking? Well, that&apos;s my business
          cause I need everything looks so good. So I learned CSS until I knew{" "}
          <ExternalLink content="Tailwind" href="https://tailwindcss.com/" />{" "}
          (when everything changed 🤯). I also love work with{" "}
          <ExternalLink content="Next.js" href="https://nextjs.org/" /> as many
          commons problems are solved.
        </p>
        <p>
          In case I have not mentioned it before I&apos;m a blockchain
          advocated. From learn to teach as I do with our kind community at{" "}
          <ExternalLink
            content="dotlabs()"
            href="https://www.instagram.com/dotlabs__/"
          />
          . You are welcome to follow me on my socials below.
        </p>

        <SocialsButtons />
      </div>
    </div>
  );
}
