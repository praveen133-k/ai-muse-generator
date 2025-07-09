import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Globe, 
  Linkedin, 
  Twitter,
  Send,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "hello@promptcraft.ai",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      description: "Quick chat and collaboration",
      value: "@promptcrafter",
      action: "Message"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a 30-minute consultation",
      value: "Free consultation available",
      action: "Book Now"
    }
  ];

  const services = [
    {
      title: "Prompt Engineering",
      description: "Custom prompt development and optimization",
      timeframe: "1-2 weeks",
      tags: ["AI Optimization", "Quality Control", "Testing"]
    },
    {
      title: "AI Workflow Setup",
      description: "End-to-end automation and integration",
      timeframe: "2-4 weeks",
      tags: ["Process Design", "Tool Integration", "Training"]
    },
    {
      title: "Content Strategy",
      description: "AI-powered content planning and execution",
      timeframe: "1-3 weeks",
      tags: ["Strategy", "Creative Direction", "Implementation"]
    },
    {
      title: "Team Training",
      description: "Workshops and knowledge transfer sessions",
      timeframe: "1-2 days",
      tags: ["Education", "Best Practices", "Hands-on"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your creative process with AI? Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">Get in Touch</CardTitle>
              <CardDescription className="text-muted-foreground">
                Tell me about your project and let's explore the possibilities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {["Prompt Engineering", "Content Strategy", "AI Workflow", "Training", "Other"].map((type) => (
                    <Badge key={type} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, goals, and how AI can help you achieve them..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-glow" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Methods</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={method.title} className="hover:shadow-elegant transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                            <IconComponent className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                            <p className="text-sm font-medium text-primary">{method.value}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            {method.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Services</h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <Card key={service.title} className="hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        <div className="flex items-center text-xs text-primary">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.timeframe}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <CheckCircle className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary">Average response time: 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;