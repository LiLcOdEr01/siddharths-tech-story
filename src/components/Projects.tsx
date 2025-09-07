import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Cloud, Shield, Code, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Automation",
      description: "Developed a comprehensive Infrastructure as Code solution using Terraform to provision and manage resources across AWS, Azure, and GCP. Implemented automated scaling, backup strategies, and cost optimization.",
      icon: Cloud,
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Python", "GitHub Actions"],
      highlights: ["Reduced provisioning time by 80%", "Automated cross-cloud deployments", "Cost optimization saved $50k annually"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Kubernetes Monitoring & Logging Platform",
      description: "Built a comprehensive monitoring and logging solution for Kubernetes clusters using Prometheus, Grafana, and ELK stack. Includes custom dashboards, alerting, and log aggregation for microservices.",
      icon: Server,
      technologies: ["Kubernetes", "Prometheus", "Grafana", "Elasticsearch", "Kibana", "Fluentd"],
      highlights: ["Real-time cluster monitoring", "Custom alerting rules", "Centralized logging for 100+ pods"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "CI/CD Pipeline Orchestration",
      description: "Designed and implemented a robust CI/CD pipeline supporting multiple programming languages and deployment targets. Features automated testing, security scanning, and progressive deployment strategies.",
      icon: Code,
      technologies: ["Jenkins", "GitLab CI", "Docker", "SonarQube", "Nexus", "Helm"],
      highlights: ["Zero-downtime deployments", "Automated quality gates", "Multi-environment pipeline"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Security Compliance Automation",
      description: "Created automated security compliance checking and remediation system for cloud infrastructure. Implements CIS benchmarks, vulnerability scanning, and compliance reporting.",
      icon: Shield,
      technologies: ["Python", "Ansible", "AWS Config", "OpenSCAP", "Nessus", "Slack API"],
      highlights: ["Automated compliance checks", "Real-time security alerts", "99% compliance score achieved"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Database Backup & Disaster Recovery",
      description: "Implemented automated backup and disaster recovery solution for critical databases. Features cross-region replication, point-in-time recovery, and automated failover mechanisms.",
      icon: Database,
      technologies: ["PostgreSQL", "MySQL", "AWS RDS", "Ansible", "Bash", "Cron"],
      highlights: ["99.9% data integrity", "15-minute RTO achieved", "Automated disaster recovery testing"],
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