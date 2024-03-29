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
          title="dotlabs()"
          description="dotlabs() website. A community where Web3 is taught to anyone interested in writing the future of the internet. Site built with Next.js."
          link="https://dotlabs.academy/"
        />

        <ProjectCard
          imageUrl="/images/alianza-juridica.png"
          title="Alianza Juridica S.A.S"
          description="Web page built for a law firm in Medellin, Colombia. Built with Next.js and Tailwind."
          link="https://alianza-juridica.com/"
        />

        {/* <ProjectCard
          imageUrl='/images/qrCodeGen.png'
          title='QR code generator'
          description='A simple way to generate a beautiful QR.'
          link='https://licencia-de-perreo.vercel.app/'
        /> */}

        <ProjectCard
          imageUrl="/images/gotify.png"
          title="Gotify"
          description="MVP built for the Web3ForU hackathon using React (Next.js) and Tailwind."
          link="https://github.com/Cocodrilette/hackathon-web3forU"
        />

        {/* <ProjectCard
          imageUrl="/images/hold-shift.gif"
          title="Hold Shift to Check Checkboxes"
          description="Holds shift to check multiple checkboxes feature using vanilla JS."
          link="https://github.com/Cocodrilette/30-days-of-javascript/tree/main/hold-shift-to-check-multiple-checkboxes"
        /> */}

        <ProjectCard
          imageUrl="/images/raccoon.jpg"
          title="This site"
          description="Obviously this site also was built be me... and yes, that's a raccoon. I'm using Next.js, Tailwind and TypeScript."
          link="https://github.com/Cocodrilette/blog"
        />
      </div>
    </div>
  );
}
