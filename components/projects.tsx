import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Element } from "react-scroll";

export default function Projects() {
  return (
    <Element
      name="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src="/modern-ecommerce-dashboard.png"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">E-commerce Platform</CardTitle>
              <CardDescription className="mb-4">
                Full-stack e-commerce solution with React, Node.js, and Stripe
                integration. Features include user authentication, product
                management, and order processing.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Stripe</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src="/task-management-app.png"
                alt="Task Management App"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">Task Management App</CardTitle>
              <CardDescription className="mb-4">
                Collaborative task management tool built with Next.js and
                Supabase. Real-time updates, team collaboration, and advanced
                filtering capabilities.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Supabase</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src="/analytics-dashboard.png"
                alt="Analytics Dashboard"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">Analytics Dashboard</CardTitle>
              <CardDescription className="mb-4">
                Real-time analytics dashboard with interactive charts and data
                visualization. Built with React, D3.js, and Python back end for
                data processing.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">D3.js</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant={"outline"}
          >
            <Link href="/projects">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </Element>
  );
}
