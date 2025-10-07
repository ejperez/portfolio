import nextConfig from "../next.config.mjs";

const hobbyProjects = [
  {
    id: 1,
    name: "Youtubeoke",
    description:
      "Youtube player for Smart TVs that can be remotely controlled by a smartphone.",
    image: "/youtubeoke.png",
    siteLink: "https://youtubeoke-react.onrender.com",
    githubLink: "https://github.com/ejperez/youtubeoke-react",
  },
  {
    id: 2,
    name: "Grepo",
    description:
      "Browser plugin for monitoring GitHub repositories and workflow status.",
    image: "/grepo.png",
    siteLink:
      "https://microsoftedge.microsoft.com/addons/detail/grepo/mcbebepjognlopopoliaelmbiodjeeco",
    githubLink: "https://github.com/ejperez/grepo",
  },
  {
    id: 3,
    name: "Song Coder",
    description: "User interface for ChordPlus song sheet generator.",
    image: "/songcoder.png",
    siteLink: "https://ejperez.github.io/songcoder",
    githubLink: "https://github.com/ejperez/songcoder",
  },
  {
    id: 4,
    name: "ChordPlus",
    description: "A library for generating printable song sheets.",
    image: "/chordplus.png",
    siteLink: "https://ejperez.github.io/chord-plus",
    githubLink: "https://github.com/ejperez/chord-plus",
  },
  {
    id: 5,
    name: "Lookbook",
    description: "A functionality for tagging products to a specific part of an image.",
    image: "/lookbook.png",
    siteLink: "https://codepen.io/icecreamcode/pen/gbPwzKZ",
  },
];

export default function HobbyProjects() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Hobby Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Side projects and experiments where I explore new technologies and
            ideas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbyProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={`${nextConfig.basePath}${project.image}` || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-card-foreground">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
                    title="View live site"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 font-semibold hover:text-foreground transition-colors"
                      title="View on GitHub"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
