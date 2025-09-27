import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "NextGen Ops (Jio Pvt Ltd)",
      location: "Navi Mumbai, India",
      duration: "Aug 2023 - Present",
      type: "Full-time",
      description: [
        "Designed and implemented CI/CD pipelines using Git, Jenkins, and Kubernetes, reducing deployment time by 40%",
        "Managed source code repositories with Git/GitHub/Azure, including branching and merging strategies",
        "Orchestrated Kubernetes clusters, deployed pods, managed jobs, and optimized infrastructure",
        "Automated monitoring and alerts using Bash scripting for Kubernetes pods and server resources",
        "Integrated and maintained JFrog Artifactory registry for container image management",
        "Configured Grafana dashboards for real-time infrastructure and application monitoring",
        "Mentored team members and collaborated with cross-functional teams on DevOps practices"
      ],
      skills: ["Kubernetes", "Jenkins", "Git", "Docker", "JFrog Artifactory", "Grafana", "Bash", "Azure DevOps"]
    },
    {
      title: "Linux System Administrator",
      company: "BharatMistri",
      location: "Navi Mumbai, India", 
      duration: "May 2023 - Oct 2022",
      type: "Full-time",
      description: [
        "Administered Linux servers including user management, file system maintenance, and monitoring",
        "Performed system performance tuning and troubleshooting for CPU, memory, and swap issues",
        "Configured and maintained YUM repositories and installed dependencies for applications and databases",
        "Created and migrated virtual machines using KVM with optimized resource allocation",
        "Automated server configuration using Ansible across Prod/Dev/Test/UAT environments, reducing manual time by 30%",
        "Performed daily monitoring of alarms, KPIs, logs, and system integrity",
        "Supported incident management by leading P1/P2 issue resolution bridge calls"
      ],
      skills: ["Linux", "Ansible", "KVM", "Shell Scripting", "YUM", "System Monitoring", "Incident Management"]
    },

  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 years of hands-on experience in system administration and DevOps practices
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-tech-blue">{exp.company}</span>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-secondary/50 text-foreground border-border">
                      {skill}
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

export default Experience;