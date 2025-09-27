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
            DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Results-driven DevOps Engineer with 3 years of experience in IT, specializing in Linux system administration, CI/CD pipeline design, cloud infrastructure, and automation. Skilled in managing large-scale deployments using Kubernetes, Jenkins, and AWS.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#send-a-message">
            <Button size="lg" className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white font-semibold px-8 py-3 shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          </a>
          
          <a target="_blank" href="https://drive.google.com/file/d/1HWFDjCmGJU1r_6NLYxvwk-OH-Aubm_oa/view?usp=sharing"><Button variant="outline" size="lg" className="border-border hover:bg-secondary font-semibold px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          </a>
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

      {/* DevOps Tool Icons Background */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-blue/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-purple/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-tech-cyan/20 rounded-full blur-xl"></div>
      
      {/* DevOps Icons */}
      <div className="absolute top-32 left-20 text-tech-blue/30 animate-pulse">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a4.347 4.347 0 0 0-8.485 0h2.127c.328-.833 1.124-1.42 2.064-1.42.94 0 1.736.587 2.175 1.42zm-9.806 7.372c-.76-.479-1.32-1.283-1.32-2.236 0-.849.44-1.574 1.074-1.976l6.95-4.016c.634-.365 1.567-.365 2.201 0l6.95 4.016c.634.402 1.074 1.127 1.074 1.976 0 .953-.56 1.757-1.32 2.236l-6.95 4.016c-.634.365-1.567.365-2.201 0l-6.95-4.016z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-24 text-tech-purple/30 animate-pulse delay-100">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2 8.6c-.2-.1-.4-.1-.6 0l-6.8 3.9v-2.7c0-.4-.3-.7-.7-.7h-4.4c-.4 0-.7.3-.7.7v2.7l-6.8-3.9c-.2-.1-.4-.1-.6 0s-.3.3-.3.5v6.8c0 .2.1.4.3.5l6.8 3.9v2.7c0 .4.3.7.7.7h4.4c.4 0 .7-.3.7-.7v-2.7l6.8-3.9c.2-.1.3-.3.3-.5V9.1c0-.2-.1-.4-.3-.5z"/>
        </svg>
      </div>
      <div className="absolute top-60 left-1/4 text-tech-cyan/20 animate-pulse delay-200">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;