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
    <section id="about" className="py-20 px-6">
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
              <p><span className="text-foreground font-medium">Location:</span> India</p>
              <p><span className="text-foreground font-medium">Email:</span> siddharth.singh@example.com</p>
              <p><span className="text-foreground font-medium">Phone:</span> +91 98765 43210</p>
              <p><span className="text-foreground font-medium">Languages:</span> English, Hindi</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              With 3 years of combined experience in Linux administration and DevOps engineering, 
              I specialize in building robust, scalable infrastructure solutions. My journey began 
              with system administration, where I developed a deep understanding of Linux environments, 
              and evolved into DevOps practices including CI/CD, containerization, and cloud technologies.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Hobbies & Interests</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hobbies.map((hobby) => (
              <Card key={hobby.name} className="bg-card border-border hover:bg-secondary transition-colors duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <hobby.icon className="h-8 w-8 text-tech-blue group-hover:text-tech-purple transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{hobby.name}</h4>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;