import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Building, Calendar, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

const experiences = [
  {
    role: "Senior Back End Developer",
    company: "STOK MNL INC.",
    date: "2019-2025",
    description:
      "Developed a plugin to migrate 600+ blogs and images from WordPress to a React.js/Next.js headless platform, reducing client time spent on content management.",
    tech: [
      "WordPress",
      "Shopify (Liquid)",
      "Storyblok",
      "Laravel",
      "Heroku",
      "PHP",
      "MySQL",
    ],
    color: "border-l-blue-600",
  },
  {
    role: "Mid Back End Developer",
    company: "STOK MNL INC.",
    date: "2017-2019",
    description:
      "Built and maintained 30+ custom WordPress themes and 6 plugins for ecommerce clients using Sage, Sleek, ACF and Centra resulting in scalable and performant websites and online stores.",
    tech: ["WordPress", "Symfony", "PHP", "MySQL", "Vue.js"],
    color: "border-l-green-600",
  },
  {
    role: "Front End Developer",
    company: "Freelance",
    date: "2025-2025",
    description:
      "Developed new user interfaces for a Learning Management System using React.js, TypeScript and GraphQL, resulting in scalable and highly maintenable codebase.",
    tech: ["React.js", "TypeScript", "GraphQL"],
    color: "border-l-purple-600",
  },
];

export default function Experience() {
  const resumeURL = process.env.NEXT_PUBLIC_RESUME_URL || "#";

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card className={`border-l-4 ${exp.color}`} key={exp.role}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Badge variant="secondary" key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant={"outline"}
            className=""
          >
            <a href={resumeURL} target="_blank">
              View Resumé
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
