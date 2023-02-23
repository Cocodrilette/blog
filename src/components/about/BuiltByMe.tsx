import ProjectCard from "../commons/ProjectCard";

export default function BuiltByMe() {
  return (
    <div className="mb-20">
      <h2 className="md:text-5xl text-3xl drop-shadow-xl mb-10 font-extrabold text-slate-100">
        What I built?
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
        <ProjectCard
          imageUrl="/images/dotlabs.png"
          title="dotlabs(Medellin)"
          description="Landing page built to dotlabs() hackathon built with Astro."
          link="https://dotlabs.academy/"
        />

        <ProjectCard
          imageUrl="/images/dotlabs-calendar.png"
          title="dotlabs() workshops"
          description="Landing page built to dotlabs workshops calendar built with Astro."
          link="https://dotlabs-workshops-calendar.vercel.app/"
        />

        <ProjectCard
          imageUrl="/images/qrCodeGen.png"
          title="QR code generator"
          description="A simple way to generate a beautiful QR."
          link="https://licencia-de-perreo.vercel.app/"
        />

        <ProjectCard
          imageUrl="/images/gotify.png"
          title="Gotify"
          description="MVP built for the Web3ForU hackathon."
          link="https://github.com/Cocodrilette/hackathon-web3forU"
        />

        <ProjectCard
          imageUrl="/images/flex-panels.jpeg"
          title="Flex Panels"
          description="Flex panels animation using vanilla CSS."
          link="https://github.com/Cocodrilette/30-days-of-javascript/tree/main/flex-panels"
        />

        <ProjectCard
          imageUrl="/images/hold-shift.gif"
          title="Hold Shift to Check Checkboxes"
          description="Holds shift to check checkboxes features using vanilla JS."
          link="https://github.com/Cocodrilette/30-days-of-javascript/tree/main/hold-shift-to-check-multiple-checkboxes"
        />

        <ProjectCard
          imageUrl="/images/ecdsa.png"
          title="ECDSA Node"
          description="A React front end that allow you to send signed messages using Elliptic Curve Digital Sign Algorithm."
          link="https://github.com/Cocodrilette/ECDSA-Node"
        />

        <ProjectCard
          imageUrl="/images/raccoon.jpg"
          title="This site"
          description="Obviously this site also was built be me... and yes, that's a raccoon."
          link="https://github.com/Cocodrilette/blog"
        />
      </div>
    </div>
  );
}
