import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      location: "Madhya Pradesh, India",
      duration: "Aug 2018 - May 2022",
      grade: "Engineering Graduate",
      description: "Specialized in electronics, communication systems, and digital technologies. Built strong foundation in technical problem-solving and system design.",
      coursework: ["Digital Electronics", "Communication Systems", "Microprocessors", "Signal Processing", "Network Theory", "Control Systems"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kendriya Vidyalaya Sangathan",
      location: "India",
      duration: "April 2017 - April 2018",
      grade: "Higher Secondary",
      description: "Focused on Science stream with emphasis on Mathematics, Physics, and Chemistry. Strong academic foundation for engineering studies.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"]
    }
  ];

  const certifications = [
    {
      name: "DevOps Professional Courses",
      issuer: "Multiple Platforms",
      date: "2022-2024",
      credentialId: "Continuous Learning",
      icon: "📚"
    },
    {
      name: "Linux System Administration",
      issuer: "Professional Experience",
      date: "2023",
      credentialId: "Jio Pvt Ltd Certified",
      icon: "🐧"
    },
    {
      name: "Kubernetes & Container Orchestration",
      issuer: "Professional Experience",
      date: "2023-2024",
      credentialId: "Production Experience",
      icon: "⚙️"
    },
    {
      name: "CI/CD Pipeline Implementation",
      issuer: "Professional Experience",
      date: "2023-2024",
      credentialId: "Jenkins & Git Expert",
      icon: "🚀"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic background and professional certifications in technology
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-tech-blue" />
            <h3 className="text-2xl font-semibold text-foreground">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{edu.degree}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-semibold text-tech-blue">{edu.institution}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-success/20 text-success border-success/20 w-fit">
                      {edu.grade}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="bg-secondary/30 text-foreground border-border">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-tech-purple" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-tech-blue transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-tech-blue font-medium mb-1">{cert.issuer}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Issued: {cert.date}</span>
                        <span className="font-mono text-xs bg-secondary/50 px-2 py-1 rounded">
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;