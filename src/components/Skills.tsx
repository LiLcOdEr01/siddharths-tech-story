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
      title: "Operating Systems",
      icon: Server,
      skills: [
        { name: "Linux (RHEL, CentOS, Ubuntu)", level: 95 },
        { name: "System Administration", level: 90 },
        { name: "Performance Tuning", level: 85 },
        { name: "KVM Virtualization", level: 80 }
      ]
    },
    {
      title: "Configuration Management & Automation",
      icon: Code,
      skills: [
        { name: "Ansible", level: 85 },
        { name: "Bash Shell Scripting", level: 90 },
        { name: "Cron Jobs", level: 88 },
        { name: "YUM Repository Setup", level: 85 }
      ]
    },
    {
      title: "CI/CD & Version Control",
      icon: GitBranch,
      skills: [
        { name: "Jenkins", level: 88 },
        { name: "Git & GitHub", level: 95 },
        { name: "Azure DevOps", level: 80 },
        { name: "JFrog Artifactory", level: 82 }
      ]
    },
    {
      title: "Containerization & Orchestration",
      icon: Container,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Pod Management", level: 82 },
        { name: "Container Registry", level: 80 }
      ]
    },
    {
      title: "Monitoring & Logging",
      icon: Monitor,
      skills: [
        { name: "Grafana", level: 85 },
        { name: "Linux System Monitoring", level: 90 },
        { name: "Log Analysis", level: 85 },
        { name: "KPI & Alerts", level: 88 }
      ]
    },
    {
      title: "Cloud & Networking",
      icon: Cloud,
      skills: [
        { name: "Microsoft Azure", level: 75 },
        { name: "Linux Network Configuration", level: 85 },
        { name: "Backup & Recovery", level: 88 },
        { name: "Troubleshooting", level: 90 }
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
                  <div className="text-2xl font-bold text-tech-blue mb-1">40%</div>
                  <div className="text-muted-foreground">Deployment Time Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-purple mb-1">30%</div>
                  <div className="text-muted-foreground">Configuration Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-cyan mb-1">3 Years</div>
                  <div className="text-muted-foreground">DevOps Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">P1/P2</div>
                  <div className="text-muted-foreground">Incident Resolution</div>
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