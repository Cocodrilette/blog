import Image from "next/image";
import { ProjectCardProps } from "../../types/components/index";

export default function ProjectCard({
  imageUrl,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-md border-2 border-beige shadow-md shadow-black xl:blur-sm hover:blur-none transition duration-200">
      <a
        className="flex flex-col"
        href={link}
        aria-details="Link to the project showed"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <Image
            className="rounded-t-md max-h-400"
            src={imageUrl}
            alt={title}
            width={1000}
            height={700}
          />
          <div className="flex flex-col gap-2 p-3">
            <h3 className="md:text-2xl text font-bold">{title}</h3>
            <p className="text-sm text-slate-400">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
