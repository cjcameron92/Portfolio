import Image from "next/image";

const projects = [
  {
    title: "Procedurally Generated Dungeons",
    src: "/assets/images/dungeons.png",
    href: "https://github.com/cjcameron92/dungeons",
  },
  {
    title: "Canadian Political GPT (LLM)",
    src: "/assets/images/poligpt.png",
    href: "https:/poligpt.ca/",
  },
  {
    title: "ConfigParser",
    src: "/assets/images/config.png",
    href: "https://github.com/cjcameron92/configparser",
  },
  {
    title: "Genetic Algorithm Decoder",
    src: "/assets/images/ga.png",
    href: "https://github.com/cjcameron92/gadecoder",
  },
  {
    title: "OpRealms",
    src: "/assets/images/oprealms.png",
    href: "https://discord.gg/oprealms",
  },
  {
    title: "Supervisor Framework",
    src: "/assets/images/supervisor.png",
    href: "https://github.com/llamasgg/supervisor",
  },
];

export default function Projects() {
    return (
        <div className="p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-10">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg overflow-hidden border-2 border-gray-50"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.src}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 hover:opacity-90"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }