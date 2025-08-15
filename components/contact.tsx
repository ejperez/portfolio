import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Element } from "react-scroll";

export default function Contacts() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN || "#";
  const github = process.env.NEXT_PUBLIC_GITHUB || "#";

  return (
    <Element name="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
          Let's Work Together
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <div className="flex justify-center gap-6">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            asChild
          >
            <a href={`mailto:${email}`}>
              <Mail className="w-5 h-5 mr-2" />
              {email}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={linkedin} target="_blank">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={github} target="_blank">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Element>
  );
}
