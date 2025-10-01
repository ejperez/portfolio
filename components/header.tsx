import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="home" className="flex h-screen items-center justify-center">
      <div className="text-center px-5">
        <img
          src="/professional-developer-headshot.jpg"
          alt="EJ Perez"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white">EJ Perez</h1>
        <h2 className="text-white mb-4 uppercase tracking-tight md:tracking-[0.14rem]">
          Full Stack Developer
        </h2>
        <p className="text-md md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Crafting seamless digital experiences from back end to front end.
          Passionate about clean code, scalable architecture, and innovative
          solutions.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button
            size="lg"
            asChild
          >
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
