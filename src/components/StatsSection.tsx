
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Code, Star, GitPullRequest, GitMerge } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Github className="h-6 w-6 text-github-blue" />,
      title: "Repositories",
      value: "24",
      description: "Public repositories"
    },
    {
      icon: <Code className="h-6 w-6 text-github-green" />,
      title: "Commits",
      value: "1,254+",
      description: "Contributions"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      title: "Stars",
      value: "126",
      description: "From the community"
    },
    {
      icon: <GitPullRequest className="h-6 w-6 text-github-purple" />,
      title: "Pull Requests",
      value: "87",
      description: "Open source contributions"
    },
  ];

  return (
    <section id="stats" className="py-16 bg-gradient-to-b from-transparent to-black/5">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">GitHub Stats</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="border border-gray-800/30 bg-black/10 hover:border-github-blue/30 transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-3">{stat.icon}</div>
                <h3 className="font-semibold text-lg">{stat.title}</h3>
                <p className="text-3xl font-bold my-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-3xl h-24 bg-black/10 rounded-lg border border-gray-800/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center text-sm">
                <span className="block text-lg font-semibold mb-1">GitHub Contribution Graph</span>
                <span className="text-muted-foreground">Connect your GitHub account to display your actual contribution graph</span>
              </p>
            </div>
            <div className="absolute inset-0 grid grid-cols-52 gap-0.5 opacity-20 p-4">
              {Array.from({ length: 364 }).map((_, i) => {
                // Random intensity for the sample graph
                const intensity = Math.floor(Math.random() * 5);
                let bgClass = 'bg-gray-800';
                
                if (intensity > 3) bgClass = 'bg-github-green';
                else if (intensity > 2) bgClass = 'bg-github-green/70';
                else if (intensity > 1) bgClass = 'bg-github-green/40';
                else if (intensity > 0) bgClass = 'bg-github-green/20';
                
                return <div key={i} className={`h-2 ${bgClass} rounded-sm`}></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
