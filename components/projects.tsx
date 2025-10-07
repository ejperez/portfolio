import nextConfig from "../next.config.mjs";

const projects = [
  {
    id: 1,
    name: "Content Migration Plugin",
    description:
      "Developed a WordPress plugin that automatically migrates blogs and images from WordPress to the Storyblok Headless CMS, reducing client time spent on content management",
    image: "/wordpress-storyblok.png",
    link: "https://github.com/ejperez/migrate-sb",
  },
  {
    id: 2,
    name: "Garbo & Friends",
    description:
      "Helped with platform migration from WordPress to Shopify. Converted Figma design to reusable blocks. Made at ROIROI.",
    image: "/garboandfriends.png",
    link: "https://garboandfriends.com",
  },
  {
    id: 3,
    name: "Snö of Sweden",
    description:
      "With 1500+ products, overhauled the caching process to boost site performance, increasing response time by 30% and avoiding downtimes by 50%. Made at ROIROI.",
    image: "/snoofsweden.png",
    link: "https://snoofsweden.com",
  },
  {
    id: 4,
    name: "Daily Sports",
    description:
      "Developed the new product bundle feature and helped with the checkout redesign. Made at ROIROI.",
    image: "/dailysports.png",
    link: "https://www.dailysports.com",
  },
  {
    id: 5,
    name: "Ella & Il",
    description:
      "Helped with checkout improvements by integrating Ingrid and Adyen Checkout. Made at ROIROI.",
    image: "/ellaandil.png",
    link: "https://www.ellaandil.com",
  },
  {
    id: 6,
    name: "Stellar Equipment",
    description:
      "Contributed in integrating a third-party fraud detection service using RESTful APIs and GraphQL, increasing site security and reducing bogus orders by 90%. Made at ROIROI.",
    image: "/stellar.png",
    link: "https://www.stellarequipment.com",
  },
  {
    id: 7,
    name: "Zeppelin CAT Sweden",
    description:
      "Helped in improving the usability of the contact search form for the client's various business areas. Made at ROIROI.",
    image: "/zeppelin.png",
    link: "https://zeppelin-cat.se/construction/kontakta-construction",
  },
  {
    id: 8,
    name: "Bilda Personal",
    description:
      "Connected the various forms to the back office system through RESTful APIs. Made at ROIROI.",
    image: "/bilda.png",
    link: "https://bildapersonal.se",
  },
  {
    id: 9,
    name: "Fasching",
    description:
      "Developed the functionality to publish and update event posts from a Google Sheet. Made at ROIROI.",
    image: "/fasching.png",
    link: "https://www.fasching.se",
  },
  {
    id: 10,
    name: "Stockholm Jazz Festival",
    description:
      "Added the free text search functionality that improved the site's usability. Made at ROIROI.",
    image: "/sjf.png",
    link: "https://stockholmjazz.se",
  },
  {
    id: 11,
    name: "Timrå Express",
    description:
      "Developed the quote system form and administration page. Made at ROIROI.",
    image: "/timra.png",
    link: "https://timraexpress.se",
  },
  {
    id: 12,
    name: "Voyado",
    description:
      "Helped in creating new sections, new post types and integrated HubSpot forms. Made at ROIROI.",
    image: "/voyado.png",
    link: "https://voyado.com",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional projects where I was the sole developer or part of a
            team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={
                    `${nextConfig.basePath}${project.image}` || "/placeholder.svg"
                  }
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  View Project
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
