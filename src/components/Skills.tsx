import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Palette, 
  Wand2, 
  MessageSquare, 
  Camera, 
  Video, 
  Music, 
  Code,
  Lightbulb,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

const Skills = () => {
  const aiTools = [
    { name: "ChatGPT", expertise: "Expert", icon: MessageSquare },
    { name: "Midjourney", expertise: "Expert", icon: Palette },
    { name: "DALL·E 3", expertise: "Advanced", icon: Camera },
    { name: "Claude", expertise: "Advanced", icon: Brain },
    { name: "Runway ML", expertise: "Intermediate", icon: Video },
    { name: "Stable Diffusion", expertise: "Advanced", icon: Wand2 },
    { name: "Eleven Labs", expertise: "Intermediate", icon: Music },
    { name: "GitHub Copilot", expertise: "Advanced", icon: Code },
  ];

  const coreSkills = [
    {
      icon: Lightbulb,
      title: "Prompt Optimization",
      description: "Crafting and refining prompts for maximum AI output quality and brand alignment",
      skills: ["Parameter Tuning", "A/B Testing", "Quality Control", "Brand Compliance"]
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Working seamlessly with design, marketing, and strategy teams",
      skills: ["Team Coordination", "Workflow Integration", "Stakeholder Management", "Creative Direction"]
    },
    {
      icon: Target,
      title: "Creative Strategy",
      description: "Developing AI-powered content strategies that drive engagement",
      skills: ["Content Planning", "Narrative Development", "Visual Exploration", "Moodboarding"]
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Staying ahead of AI developments and emerging creative technologies",
      skills: ["Market Research", "Tool Evaluation", "Best Practices", "Innovation Tracking"]
    }
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-primary-glow text-primary-foreground";
      case "Intermediate": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering the art and science of AI prompt engineering across multiple platforms and creative domains.
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">AI Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.name} className="hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{tool.name}</h4>
                    <Badge className={getExpertiseColor(tool.expertise)}>
                      {tool.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coreSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Card key={skill.title} className="hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">{skill.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item) => (
                        <Badge key={item} variant="secondary" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;