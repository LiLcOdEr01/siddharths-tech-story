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
      duration: "May 2022 - Oct 2022",
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
    <section id="experience" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background DevOps Icons */}
      <div className="absolute top-24 right-20 text-tech-purple/8 animate-pulse delay-100">
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.09 3.26L16 4.07l-1.91 2.84L17 8l-3.5 1.5L15 12l-3.5-1.5L9 12l1.5-2.5L7 8l2.91-1.09L8 4.07l2.91 1.19L12 2zm0 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-16 text-devops-orange/8 animate-pulse delay-200">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 22.86c-6.075-.31-10.893-5.5-10.893-11.86 0-6.569 5.347-11.916 11.916-11.916 6.568 0 11.915 5.347 11.915 11.916 0 6.36-4.818 11.55-10.892 11.86zm-2.884-17.82c-1.836 1.836-2.943 4.37-2.943 7.173 0 5.598 4.539 10.137 10.137 10.137 2.803 0 5.337-1.107 7.173-2.943-1.836 1.836-4.37 2.943-7.173 2.943-5.598 0-10.137-4.539-10.137-10.137 0-2.803 1.107-5.337 2.943-7.173zm7.173 7.173c0-1.988-1.612-3.6-3.6-3.6s-3.6 1.612-3.6 3.6 1.612 3.6 3.6 3.6 3.6-1.612 3.6-3.6z"/>
        </svg>
      </div>
      
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