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
      <div className="absolute top-1/2 left-5 w-24 h-24 bg-success/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-1/3 w-18 h-18 bg-warning/10 rounded-full blur-xl"></div>
      
      {/* DevOps Tool Icons - Jenkins */}
      <div className="absolute top-24 left-16 text-tech-blue/25 animate-pulse">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 22.86c-6.075-.31-10.893-5.5-10.893-11.86 0-6.569 5.347-11.916 11.916-11.916 6.568 0 11.915 5.347 11.915 11.916 0 6.36-4.818 11.55-10.892 11.86zm-2.884-17.82c-1.836 1.836-2.943 4.37-2.943 7.173 0 5.598 4.539 10.137 10.137 10.137 2.803 0 5.337-1.107 7.173-2.943-1.836 1.836-4.37 2.943-7.173 2.943-5.598 0-10.137-4.539-10.137-10.137 0-2.803 1.107-5.337 2.943-7.173zm7.173 7.173c0-1.988-1.612-3.6-3.6-3.6s-3.6 1.612-3.6 3.6 1.612 3.6 3.6 3.6 3.6-1.612 3.6-3.6z"/>
        </svg>
      </div>
      
      {/* Docker Icon */}
      <div className="absolute top-1/3 right-12 text-tech-cyan/25 animate-pulse delay-75">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.2 11.8h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm10.4 0h2.4v-2.4h-2.4v2.4zm-10.4-2.6h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm-5.2-2.6h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm7.8 5.2c-.3-.8-1-1.3-1.8-1.3-.2 0-.5 0-.7.1-.1-.5-.4-.9-.8-1.2-.4-.3-.9-.4-1.4-.4h-.1c.1-.2.1-.4.1-.6 0-.7-.4-1.4-1-1.8-.6-.4-1.4-.5-2.1-.2-1.1.4-1.8 1.4-1.8 2.6h-8.2c-.7 0-1.3.6-1.3 1.3v7.8c0 .7.6 1.3 1.3 1.3h19.2c.7 0 1.3-.6 1.3-1.3v-2.6c0-.8-.4-1.5-1-1.9-.6-.4-1.4-.5-2.1-.2z"/>
        </svg>
      </div>
      
      {/* Kubernetes Icon */}
      <div className="absolute bottom-1/3 left-20 text-tech-purple/25 animate-pulse delay-150">
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.09 3.26L16 4.07l-1.91 2.84L17 8l-3.5 1.5L15 12l-3.5-1.5L9 12l1.5-2.5L7 8l2.91-1.09L8 4.07l2.91 1.19L12 2zm0 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </div>
      
      {/* Linux Terminal Icon */}
      <div className="absolute top-2/3 right-1/4 text-success/25 animate-pulse delay-225">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM6 7h1v1H6V7zm2 0h8v1H8V7zM6 9h1v1H6V9zm2 0h8v1H8V9zm-2 2h1v1H6v-1zm2 0h8v1H8v-1zm-2 2h1v1H6v-1zm2 0h4v1H8v-1z"/>
        </svg>
      </div>
      
      {/* Git Icon */}
      <div className="absolute bottom-1/4 right-16 text-warning/25 animate-pulse delay-300">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.421-.225-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      </div>
      
      {/* Ansible Icon */}
      <div className="absolute top-1/4 left-1/3 text-tech-cyan/20 animate-pulse delay-375">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 18l-6-6-6 6V6h12v12z"/>
        </svg>
      </div>
      
      {/* AWS Icon */}
      <div className="absolute bottom-16 left-1/4 text-tech-blue/20 animate-pulse delay-450">
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.048.08.064.16.064.24 0 .096-.08.192-.24.288l-.8.528c-.112.08-.224.112-.336.112-.128 0-.256-.064-.384-.176-.112-.128-.208-.256-.288-.4-.08-.144-.176-.304-.272-.48-.272.32-.608.576-1.008.768-.4.192-.848.288-1.344.288-.768 0-1.376-.224-1.824-.656-.448-.432-.672-1.008-.672-1.728 0-.768.272-1.392.816-1.888.544-.496 1.28-.736 2.192-.736.304 0 .624.016.944.064.32.048.656.112.992.192v-.64c0-.672-.144-1.136-.416-1.392-.288-.256-.768-.384-1.44-.384-.32 0-.656.032-.992.112-.336.08-.656.176-.976.304-.144.064-.256.096-.32.112-.064.016-.112.016-.144.016-.128 0-.192-.096-.192-.288v-.448c0-.144.016-.256.064-.32.048-.064.144-.128.272-.192.32-.176.704-.32 1.168-.432.464-.112.96-.176 1.504-.176 1.152 0 1.984.256 2.512.784.528.528.784 1.328.784 2.416v3.168zm-5.728 2.144c.288 0 .592-.048.912-.16.32-.112.608-.272.848-.496.144-.144.256-.304.304-.48.048-.176.08-.368.08-.592v-.288c-.256-.064-.528-.112-.816-.144-.288-.032-.576-.048-.864-.048-.624 0-1.088.112-1.376.352-.288.24-.432.576-.432 1.008 0 .416.112.736.336.944.224.224.544.336.976.336l.032.008zm10.592 1.28c-.16 0-.272-.032-.336-.08-.064-.048-.128-.144-.176-.272l-1.968-6.496c-.048-.16-.08-.272-.08-.336 0-.128.064-.208.192-.208h.784c.16 0 .272.032.336.08.064.048.112.144.16.272l1.408 5.552 1.312-5.552c.032-.128.08-.224.144-.272.064-.048.176-.08.336-.08h.64c.16 0 .272.032.336.08.064.048.128.144.144.272l1.328 5.616 1.44-5.616c.048-.128.096-.224.16-.272.064-.048.176-.08.336-.08h.752c.128 0 .208.064.208.208 0 .048-.016.096-.032.16-.016.064-.032.128-.064.208l-2.016 6.496c-.048.128-.112.224-.176.272-.064.048-.176.08-.336.08h-.688c-.16 0-.272-.032-.336-.08-.064-.048-.128-.144-.144-.288l-1.296-5.392-1.28 5.392c-.032.144-.08.24-.144.288-.064.048-.176.08-.336.08h-.688zm8.528.112c-.544 0-1.088-.064-1.616-.208-.528-.144-.944-.32-1.232-.528-.144-.096-.24-.208-.272-.32-.032-.112-.048-.224-.048-.336v-.464c0-.192.064-.288.192-.288.048 0 .096.016.144.032.048.016.128.048.208.08.272.128.576.24.912.304.336.064.672.096 1.008.096.544 0 .96-.096 1.28-.288.32-.192.48-.464.48-.816 0-.24-.08-.448-.224-.624-.144-.176-.416-.336-.784-.48l-1.12-.352c-.8-.256-1.392-.64-1.728-1.152-.336-.512-.512-1.088-.512-1.728 0-.496.096-.928.288-1.312.192-.384.448-.704.784-.976.336-.272.736-.48 1.184-.624.448-.144.912-.224 1.408-.224.24 0 .48.016.704.048.24.032.464.08.688.128.208.048.416.112.608.176.192.064.336.128.432.192.128.08.224.16.272.256.048.096.08.208.08.336v.432c0 .192-.064.288-.192.288-.064 0-.16-.032-.288-.096-.576-.256-1.216-.384-1.92-.384-.496 0-.88.08-1.168.256-.288.176-.432.432-.432.784 0 .24.096.448.272.624.176.176.48.352.912.528l1.104.352c.784.256 1.344.608 1.68 1.056.336.448.512.976.512 1.568 0 .496-.096.944-.288 1.344-.192.4-.464.752-.8 1.056-.352.304-.768.528-1.28.688-.496.176-1.056.256-1.648.256z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;