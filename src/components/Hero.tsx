import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent">
            Siddharth Singh
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            DevOps Engineer & Linux Administrator
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about infrastructure automation, cloud technologies, and building scalable systems. 
            3 years of experience transforming development workflows and optimizing deployments.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white font-semibold px-8 py-3 shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-secondary font-semibold px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="p-3 rounded-full bg-card hover:bg-secondary transition-colors duration-300 shadow-card">
            <Github className="h-6 w-6 text-foreground" />
          </a>
          <a href="#" className="p-3 rounded-full bg-card hover:bg-secondary transition-colors duration-300 shadow-card">
            <Linkedin className="h-6 w-6 text-foreground" />
          </a>
          <a href="#" className="p-3 rounded-full bg-card hover:bg-secondary transition-colors duration-300 shadow-card">
            <Mail className="h-6 w-6 text-foreground" />
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-blue/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-purple/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-tech-cyan/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;