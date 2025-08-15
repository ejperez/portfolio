import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Building, Calendar, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

export default function Experience() {
  const resumeURL = process.env.NEXT_PUBLIC_RESUME_URL || "#";

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Work Experience
        </h2>
        <div className="space-y-8">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">
                    Senior Full Stack Developer
                  </CardTitle>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Building className="w-4 h-4" />
                    <span>TechCorp Solutions</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Lead development of enterprise-scale web applications serving
                100k+ users. Architected microservices infrastructure and
                mentored junior developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">
                    Full Stack Developer
                  </CardTitle>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Building className="w-4 h-4" />
                    <span>StartupXYZ</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>2020 - 2022</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Built and maintained multiple client projects from concept to
                deployment. Collaborated with design teams to create
                pixel-perfect user interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Heroku</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">Frontend Developer</CardTitle>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Building className="w-4 h-4" />
                    <span>Digital Agency Pro</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>2019 - 2020</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Developed responsive websites and web applications for various
                clients. Focused on performance optimization and cross-browser
                compatibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">SASS</Badge>
                <Badge variant="secondary">WordPress</Badge>
                <Badge variant="secondary">jQuery</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 bg-transparent"
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
