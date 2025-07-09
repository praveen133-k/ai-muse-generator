import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Product Campaigns",
      description: "Developed AI-generated product photography and marketing copy for a major retail brand using Midjourney and ChatGPT.",
      tools: ["Midjourney", "ChatGPT", "DALL·E 3"],
      category: "Commercial",
      results: "45% increase in engagement, 30% boost in conversion rates",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "Brand Identity & Voice Development",
      description: "Created comprehensive brand guidelines and tone of voice documentation through iterative AI prompt engineering.",
      tools: ["Claude", "ChatGPT", "Midjourney"],
      category: "Branding",
      results: "Consistent brand voice across 12 touchpoints",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "Social Media Content Library",
      description: "Built automated workflows for generating platform-specific content using AI tools and custom prompt libraries.",
      tools: ["Runway ML", "Stable Diffusion", "ChatGPT"],
      category: "Social Media",
      results: "300+ pieces of content, 60% faster production",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "Interactive Storytelling Campaign",
      description: "Designed an immersive narrative experience combining AI-generated visuals and dynamic text for a film promotion.",
      tools: ["DALL·E 3", "ChatGPT", "Midjourney"],
      category: "Entertainment",
      results: "2M+ interactions, 85% completion rate",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "Technical Documentation Automation",
      description: "Streamlined technical writing processes using AI to generate clear, user-friendly documentation and tutorials.",
      tools: ["ChatGPT", "Claude", "GitHub Copilot"],
      category: "Technical",
      results: "50% reduction in documentation time",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "Video Content Production",
      description: "Created AI-powered video content workflows for educational series, combining script generation with visual assets.",
      tools: ["Runway ML", "Eleven Labs", "ChatGPT"],
      category: "Video",
      results: "20+ educational videos, 95% learner satisfaction",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Commercial": "bg-primary text-primary-foreground",
      "Branding": "bg-primary-glow text-primary-foreground",
      "Social Media": "bg-muted text-muted-foreground",
      "Entertainment": "bg-primary text-primary-foreground",
      "Technical": "bg-primary-glow text-primary-foreground",
      "Video": "bg-muted text-muted-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-secondary text-secondary-foreground";
  };

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how I've helped brands leverage AI to create compelling content and drive measurable results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge className={getCategoryColor(project.category) + " mb-2"}>
                        {project.category}
                      </Badge>
                      <CardTitle className="text-foreground text-xl mb-2">{project.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Tools Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Results:</p>
                      <p className="text-sm text-muted-foreground">{project.results}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* More Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge className={getCategoryColor(project.category) + " w-fit mb-2"}>
                    {project.category}
                  </Badge>
                  <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 3).map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-primary font-medium">{project.results}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-3 w-3 mr-2" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
            See Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;