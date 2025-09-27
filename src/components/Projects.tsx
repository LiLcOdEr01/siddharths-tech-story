import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Cloud, Shield, Code, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Implementation at Jio",
      description: "Designed and implemented fully automated CI/CD pipelines using Git, Jenkins, and Kubernetes, reducing deployment time by 40% and enhancing application reliability through self-healing clusters.",
      icon: Code,
      technologies: ["Jenkins", "Git", "Kubernetes", "Docker", "Azure DevOps"],
      highlights: ["Reduced deployment time by 40%", "Enhanced application reliability", "Streamlined Git workflows (branching, tagging, merging)"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Container Registry Management with JFrog",
      description: "Integrated and maintained JFrog Artifactory registry for container image management, improving release cycles and significantly reducing build times for development teams.",
      icon: Database,
      technologies: ["JFrog Artifactory", "Docker", "Kubernetes", "Container Management"],
      highlights: ["Improved release cycles significantly", "Reduced build time", "Centralized container image management"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Grafana Monitoring Dashboard Implementation",
      description: "Configured comprehensive Grafana dashboards for real-time infrastructure and application monitoring, delivering real-time visibility into system health and reducing MTTR during incidents.",
      icon: Server,
      technologies: ["Grafana", "Prometheus", "Linux Monitoring", "Alerting"],
      highlights: ["Real-time system health visibility", "Reduced MTTR during incidents", "Proactive monitoring and alerting"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Ansible Automation for Server Configuration",
      description: "Automated server configuration using Ansible across Prod/Dev/Test/UAT environments, reducing manual configuration time by 30% and ensuring consistency across environments.",
      icon: Shield,
      technologies: ["Ansible", "Linux", "YAML", "Environment Management"],
      highlights: ["30% reduction in manual configuration time", "Consistent environment setup", "Automated multi-environment deployments"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "KVM Virtualization & Migration",
      description: "Successfully migrated multiple production workloads to KVM-based virtualized environments with minimal downtime, optimizing resource allocation and improving system performance.",
      icon: Cloud,
      technologies: ["KVM", "Linux", "Virtualization", "Resource Management"],
      highlights: ["Minimal downtime during migration", "Optimized resource allocation", "Improved system performance"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my DevOps and infrastructure automation projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border hover:shadow-glow transition-all duration-300 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-tech-blue/20 to-tech-purple/20">
                    <project.icon className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-secondary">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-secondary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-tech-blue transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-secondary/60 text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;