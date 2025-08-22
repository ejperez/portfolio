import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/professional-developer-headshot.jpg"
            alt="EJ Perez"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            EJ Perez
          </h1>
          <h2 className="text-1xl md:text-1xl text-white mb-4 uppercase tracking-widest">
            Full Stack Developer
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Crafting seamless digital experiences from back end to front end.
            Passionate about clean code, scalable architecture, and innovative
            solutions.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
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
      </div>
    </section>
  );
}
