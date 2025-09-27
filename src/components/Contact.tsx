import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lilcoder01@gmail.com",
      href: "mailto:lilcoder01@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9321962591",
      href: "tel:+919321962591"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Airoli, Navi Mumbai, Maharashtra",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/siddharthsingh",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/siddharthsingh",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 group-hover:from-tech-blue/30 group-hover:to-tech-purple/30 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-tech-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-tech-blue transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Available for:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Full-time DevOps Engineer positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Infrastructure consulting projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Technical mentoring opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Open source collaborations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your full name"
                      className="bg-background border-border focus:ring-tech-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:ring-tech-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What would you like to discuss?"
                    className="bg-background border-border focus:ring-tech-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-background border-border focus:ring-tech-blue resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white font-semibold py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;