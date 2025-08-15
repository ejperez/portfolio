import { Code, Database, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    label: "Frontend",
    icon: <Code className="w-5 h-5 text-blue-600" />,
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",      
      "Boostrap",
      "SASS",
    ],
  },
  {
    label: "Backend",
    icon: <Server className="w-5 h-5 text-green-600" />,
    items: [
      "PHP",
      "Laravel",
      "WordPress",
      "Node.js",
      "Express.js",
      "Shopify",
      "GraphQL",
      "RESTful APIs",
    ],
  },
  {
    label: "Database & DevOps",
    icon: <Database className="w-5 h-5 text-purple-600" />,
    items: ["MySQL", "Redis", "Git", "GitHub", "Docker", "Vercel", "Render", "Heroku"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.label}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {skill.icon}
                  {skill.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
