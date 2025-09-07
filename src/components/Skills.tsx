import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Server, 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Monitor,
  GitBranch,
  Container
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Automation",
      icon: Server,
      skills: [
        { name: "Docker & Containers", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins/GitLab CI", level: 88 },
        { name: "Terraform", level: 82 },
        { name: "Ansible", level: 80 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "Amazon Web Services", level: 85 },
        { name: "Microsoft Azure", level: 75 },
        { name: "Google Cloud Platform", level: 70 },
        { name: "Digital Ocean", level: 80 }
      ]
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash/Shell Scripting", level: 90 },
        { name: "Go", level: 70 },
        { name: "YAML/JSON", level: 95 }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      skills: [
        { name: "Prometheus & Grafana", level: 88 },
        { name: "ELK Stack", level: 82 },
        { name: "New Relic", level: 75 },
        { name: "Datadog", level: 70 }
      ]
    },
    {
      title: "Version Control & Collaboration",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "GitLab", level: 85 },
        { name: "Jira & Confluence", level: 80 },
        { name: "Slack Integration", level: 85 }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      skills: [
        { name: "Security Scanning", level: 80 },
        { name: "Compliance Automation", level: 75 },
        { name: "Vulnerability Management", level: 78 },
        { name: "Access Control", level: 85 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-success";
    if (level >= 80) return "bg-tech-blue";
    if (level >= 70) return "bg-tech-cyan";
    return "bg-warning";
  };

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in DevOps tools, cloud platforms, and automation technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 group-hover:from-tech-blue/30 group-hover:to-tech-purple/30 transition-all duration-300">
                    <category.icon className="h-5 w-5 text-tech-blue" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-tech-blue transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Additional Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-blue mb-1">100+</div>
                  <div className="text-muted-foreground">Servers Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-purple mb-1">50+</div>
                  <div className="text-muted-foreground">CI/CD Pipelines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-cyan mb-1">99.9%</div>
                  <div className="text-muted-foreground">Uptime Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">24/7</div>
                  <div className="text-muted-foreground">On-call Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;