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
    <section id="skills" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background DevOps Icons */}
      <div className="absolute top-20 left-16 text-tech-cyan/8 animate-pulse delay-150">
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.2 11.8h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm10.4 0h2.4v-2.4h-2.4v2.4zm-10.4-2.6h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm-5.2-2.6h2.4v-2.4h-2.4v2.4zm2.6 0h2.4v-2.4h-2.4v2.4zm7.8 5.2c-.3-.8-1-1.3-1.8-1.3-.2 0-.5 0-.7.1-.1-.5-.4-.9-.8-1.2-.4-.3-.9-.4-1.4-.4h-.1c.1-.2.1-.4.1-.6 0-.7-.4-1.4-1-1.8-.6-.4-1.4-.5-2.1-.2-1.1.4-1.8 1.4-1.8 2.6h-8.2c-.7 0-1.3.6-1.3 1.3v7.8c0 .7.6 1.3 1.3 1.3h19.2c.7 0 1.3-.6 1.3-1.3v-2.6c0-.8-.4-1.5-1-1.9-.6-.4-1.4-.5-2.1-.2z"/>
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 text-git-red/8 animate-pulse delay-250">
        <svg className="w-11 h-11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.421-.225-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      </div>
      <div className="absolute top-2/3 left-8 text-aws-orange/8 animate-pulse delay-400">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.048.08.064.16.064.24 0 .096-.08.192-.24.288l-.8.528c-.112.08-.224.112-.336.112-.128 0-.256-.064-.384-.176-.112-.128-.208-.256-.288-.4-.08-.144-.176-.304-.272-.48-.272.32-.608.576-1.008.768-.4.192-.848.288-1.344.288-.768 0-1.376-.224-1.824-.656-.448-.432-.672-1.008-.672-1.728 0-.768.272-1.392.816-1.888.544-.496 1.28-.736 2.192-.736.304 0 .624.016.944.064.32.048.656.112.992.192v-.64c0-.672-.144-1.136-.416-1.392-.288-.256-.768-.384-1.44-.384-.32 0-.656.032-.992.112-.336.08-.656.176-.976.304-.144.064-.256.096-.32.112-.064.016-.112.016-.144.016-.128 0-.192-.096-.192-.288v-.448c0-.144.016-.256.064-.32.048-.064.144-.128.272-.192.32-.176.704-.32 1.168-.432.464-.112.96-.176 1.504-.176 1.152 0 1.984.256 2.512.784.528.528.784 1.328.784 2.416v3.168zm-5.728 2.144c.288 0 .592-.048.912-.16.32-.112.608-.272.848-.496.144-.144.256-.304.304-.48.048-.176.08-.368.08-.592v-.288c-.256-.064-.528-.112-.816-.144-.288-.032-.576-.048-.864-.048-.624 0-1.088.112-1.376.352-.288.24-.432.576-.432 1.008 0 .416.112.736.336.944.224.224.544.336.976.336l.032.008zm10.592 1.28c-.16 0-.272-.032-.336-.08-.064-.048-.128-.144-.176-.272l-1.968-6.496c-.048-.16-.08-.272-.08-.336 0-.128.064-.208.192-.208h.784c.16 0 .272.032.336.08.064.048.112.144.16.272l1.408 5.552 1.312-5.552c.032-.128.08-.224.144-.272.064-.048.176-.08.336-.08h.64c.16 0 .272.032.336.08.064.048.128.144.144.272l1.328 5.616 1.44-5.616c.048-.128.096-.224.16-.272.064-.048.176-.08.336-.08h.752c.128 0 .208.064.208.208 0 .048-.016.096-.032.16-.016.064-.032.128-.064.208l-2.016 6.496c-.048.128-.112.224-.176.272-.064.048-.176.08-.336.08h-.688c-.16 0-.272-.032-.336-.08-.064-.048-.128-.144-.144-.288l-1.296-5.392-1.28 5.392c-.032.144-.08.24-.144.288-.064.048-.176.08-.336.08h-.688zm8.528.112c-.544 0-1.088-.064-1.616-.208-.528-.144-.944-.32-1.232-.528-.144-.096-.24-.208-.272-.32-.032-.112-.048-.224-.048-.336v-.464c0-.192.064-.288.192-.288.048 0 .096.016.144.032.048.016.128.048.208.08.272.128.576.24.912.304.336.064.672.096 1.008.096.544 0 .96-.096 1.28-.288.32-.192.48-.464.48-.816 0-.24-.08-.448-.224-.624-.144-.176-.416-.336-.784-.48l-1.12-.352c-.8-.256-1.392-.64-1.728-1.152-.336-.512-.512-1.088-.512-1.728 0-.496.096-.928.288-1.312.192-.384.448-.704.784-.976.336-.272.736-.48 1.184-.624.448-.144.912-.224 1.408-.224.24 0 .48.016.704.048.24.032.464.08.688.128.208.048.416.112.608.176.192.064.336.128.432.192.128.08.224.16.272.256.048.096.08.208.08.336v.432c0 .192-.064.288-.192.288-.064 0-.16-.032-.288-.096-.576-.256-1.216-.384-1.92-.384-.496 0-.88.08-1.168.256-.288.176-.432.432-.432.784 0 .24.096.448.272.624.176.176.48.352.912.528l1.104.352c.784.256 1.344.608 1.68 1.056.336.448.512.976.512 1.568 0 .496-.096.944-.288 1.344-.192.4-.464.752-.8 1.056-.352.304-.768.528-1.28.688-.496.176-1.056.256-1.648.256z"/>
        </svg>
      </div>
      
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