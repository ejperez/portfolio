import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function AllProjects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "Full-featured online store with payment processing, inventory management, and admin dashboard",
      madeAt: "Freelance",
      builtWith: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team collaboration features",
      madeAt: "TechCorp Inc.",
      builtWith: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "Analytics Dashboard",
      description:
        "Interactive data visualization platform for business intelligence and reporting",
      madeAt: "DataViz Solutions",
      builtWith: ["React", "D3.js", "Python", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "Mobile Banking App",
      description:
        "Secure mobile banking solution with biometric authentication and transaction history",
      madeAt: "FinTech Startup",
      builtWith: ["React Native", "Firebase", "Redux", "Expo"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "AI Content Generator",
      description:
        "AI-powered writing assistant that generates marketing copy and blog content",
      madeAt: "ContentAI Labs",
      builtWith: ["Next.js", "OpenAI API", "Prisma", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "Social Media Platform",
      description:
        "Real-time social networking app with messaging, posts, and live chat functionality",
      madeAt: "SocialTech Co.",
      builtWith: ["Vue.js", "Express", "Socket.io", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "Inventory Management System",
      description:
        "Enterprise-grade inventory tracking with automated reordering and supplier management",
      madeAt: "Enterprise Solutions",
      builtWith: ["Angular", "Django", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "Code Review Platform",
      description:
        "Developer tool for collaborative code reviews with automated testing integration",
      madeAt: "DevTools Inc.",
      builtWith: ["Svelte", "FastAPI", "GitHub API", "WebSockets"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      name: "DevOps Monitoring Dashboard",
      description:
        "Infrastructure monitoring solution with alerting and performance metrics visualization",
      madeAt: "CloudOps Systems",
      builtWith: ["React", "Grafana", "Prometheus", "Kubernetes"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                All Projects
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                A comprehensive showcase of my development work
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      Project
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      Made at
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      Built with
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {projects.map((project, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900 dark:text-white">
                          {project.name}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {project.description}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-600 dark:text-slate-300">
                          {project.madeAt}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {project.builtWith.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.githubUrl}>
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.liveUrl}>
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Live
                            </Link>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Made at:
                    </span>
                    <div className="text-slate-600 dark:text-slate-300">
                      {project.madeAt}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Built with:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.builtWith.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Links:
                    </span>
                    <div className="flex gap-2 mt-1">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
