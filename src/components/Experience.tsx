import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      duration: "2022 - Present (2 years)",
      type: "Full-time",
      description: [
        "Designed and implemented CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 60%",
        "Managed containerized applications using Docker and Kubernetes across development and production environments",
        "Automated infrastructure provisioning using Terraform and Ansible, supporting 50+ microservices",
        "Implemented monitoring solutions with Prometheus, Grafana, and ELK stack for 99.9% uptime",
        "Collaborated with development teams to optimize application performance and scalability"
      ],
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Monitoring"]
    },
    {
      title: "Linux System Administrator",
      company: "DataFlow Systems",
      location: "Delhi, India", 
      duration: "2021 - 2022 (1 year)",
      type: "Full-time",
      description: [
        "Administered 100+ Linux servers (CentOS, Ubuntu) ensuring 99.8% uptime across production environments",
        "Implemented automated backup solutions and disaster recovery procedures, reducing recovery time by 40%",
        "Managed user access controls, security patches, and system updates following security best practices",
        "Optimized server performance through resource monitoring and capacity planning",
        "Provided 24/7 on-call support for critical system issues and incident response"
      ],
      skills: ["Linux", "Shell Scripting", "System Administration", "Security", "Backup Solutions"]
    }
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