
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: string[];
};

const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"]
    },
    {
      name: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Shadcn UI"]
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Firebase"]
    },
    {
      name: "Other",
      skills: ["REST APIs", "GraphQL", "CI/CD", "Agile", "Test-Driven Development"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="border border-gray-800/30 bg-black/10">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="bg-github-blue/10 text-github-blue border-github-blue/20"
                    >
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

export default SkillsSection;
