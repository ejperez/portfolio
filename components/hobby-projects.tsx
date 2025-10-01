const hobbyProjects = [
  {
    id: 1,
    name: "Weather Widget",
    description: "Beautiful weather app with animated backgrounds",
    image: "/weather-app-interface.png",
    siteLink: "https://example.com/weather",
    githubLink: "https://github.com/username/weather-widget",
  },
  {
    id: 2,
    name: "Recipe Finder",
    description: "Search and save your favorite recipes",
    image: "/recipe-app-interface.png",
    siteLink: "https://example.com/recipes",
    githubLink: "https://github.com/username/recipe-finder",
  },
  {
    id: 3,
    name: "Markdown Editor",
    description: "Real-time markdown editor with live preview",
    image: "/markdown-editor-interface.png",
    siteLink: "https://example.com/markdown",
    githubLink: "https://github.com/username/markdown-editor",
  },
  {
    id: 4,
    name: "Color Palette Generator",
    description: "Generate beautiful color schemes for your projects",
    image: "/color-palette-generator.png",
    siteLink: "https://example.com/colors",
    githubLink: "https://github.com/username/color-generator",
  },
]

export default function HobbyProjects() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Hobby Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Side projects and experiments where I explore new technologies and ideas
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
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>

                <div className="flex gap-3">
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
                    title="View live site"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-foreground/70 font-semibold hover:text-foreground transition-colors"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
