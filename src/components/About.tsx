import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Coffee, Camera, Music, BookOpen } from "lucide-react";

const About = () => {
  const hobbies = [
    { icon: Code, name: "Open Source", description: "Contributing to various projects" },
    { icon: Coffee, name: "Coffee Brewing", description: "Exploring different brewing methods" },
    { icon: Camera, name: "Photography", description: "Landscape and street photography" },
    { icon: Music, name: "Guitar", description: "Playing acoustic and electric guitar" },
    { icon: BookOpen, name: "Reading", description: "Tech blogs and sci-fi novels" },
    { icon: Server, name: "Homelab", description: "Experimenting with self-hosted services" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background DevOps Icons */}
      <div className="absolute top-16 right-10 text-devops-orange/10 animate-pulse delay-100">
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 18l-6-6-6 6V6h12v12z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-8 text-linux-green/10 animate-pulse delay-200">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM6 7h1v1H6V7zm2 0h8v1H8V7zM6 9h1v1H6V9zm2 0h8v1H8V9zm-2 2h1v1H6v-1zm2 0h8v1H8v-1zm-2 2h1v1H6v-1zm2 0h4v1H8v-1z"/>
        </svg>
      </div>
      <div className="absolute top-1/3 left-12 text-ansible-red/8 animate-pulse delay-300">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 18l-6-6-6 6V6h12v12z"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist with a love for automation and efficient systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Personal Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><span className="text-foreground font-medium">Full Name:</span> Siddharth Singh</p>
              <p><span className="text-foreground font-medium">Location:</span> Airoli, Navi Mumbai, Maharashtra</p>
              <p><span className="text-foreground font-medium">Email:</span> lilcoder01@gmail.com</p>
              <p><span className="text-foreground font-medium">Phone:</span> +91 9321962591</p>
              <p><span className="text-foreground font-medium">Languages:</span> English, Hindi</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Results-driven DevOps Engineer with 3 years of experience in IT, specializing in Linux system 
              administration, CI/CD pipeline design, cloud infrastructure, and automation. My expertise includes 
              managing large-scale deployments using Kubernetes, Jenkins, Ansible, Git, and Azure, with a proven 
              track record of improving deployment speed and reducing downtime.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-blue mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-purple mb-2">40%</div>
            <div className="text-muted-foreground">Deployment Time Reduced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-cyan mb-2">30%</div>
            <div className="text-muted-foreground">Configuration Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">24/7</div>
            <div className="text-muted-foreground">System Monitoring</div>
          </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Extra-Curricular Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:bg-secondary transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-3xl">⚽</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Jio Football Team</h4>
                <p className="text-sm text-muted-foreground">Member representing Jio in corporate tournaments</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:bg-secondary transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Reliance Foundation</h4>
                <p className="text-sm text-muted-foreground">Volunteer for CSR initiatives</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:bg-secondary transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Code className="h-8 w-8 text-tech-blue group-hover:text-tech-purple transition-colors duration-300" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">DevOps Learning</h4>
                <p className="text-sm text-muted-foreground">Continuous learning through courses</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:bg-secondary transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Server className="h-8 w-8 text-tech-blue group-hover:text-tech-purple transition-colors duration-300" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Infrastructure</h4>
                <p className="text-sm text-muted-foreground">System optimization projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;