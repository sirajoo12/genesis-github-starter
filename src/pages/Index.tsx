
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import RepoCard from "@/components/RepoCard";
import SkillsSection from "@/components/SkillsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Example repository data
  const featuredRepos = [
    {
      name: "project-showcase",
      description: "A beautiful GitHub repository showcase template built with React, TypeScript, and Tailwind CSS",
      stars: 48,
      forks: 12,
      language: "TypeScript",
      url: "https://github.com/username/project-showcase"
    },
    {
      name: "personal-portfolio",
      description: "My personal portfolio website built with React and styled with Tailwind CSS",
      stars: 32,
      forks: 8,
      language: "JavaScript",
      url: "https://github.com/username/personal-portfolio"
    },
    {
      name: "markdown-notes",
      description: "A markdown note-taking application with search functionality and tagging",
      stars: 27,
      forks: 5,
      language: "TypeScript",
      url: "https://github.com/username/markdown-notes"
    },
    {
      name: "task-manager-api",
      description: "RESTful API for a task manager application built with Node.js and Express",
      stars: 21,
      forks: 3,
      language: "JavaScript",
      url: "https://github.com/username/task-manager-api"
    },
    {
      name: "weather-dashboard",
      description: "Weather dashboard application with location-based forecasts and historical data",
      stars: 15,
      forks: 2,
      language: "JavaScript",
      url: "https://github.com/username/weather-dashboard"
    },
    {
      name: "algorithm-visualizer",
      description: "Interactive algorithm visualization tool for educational purposes",
      stars: 18,
      forks: 4,
      language: "TypeScript",
      url: "https://github.com/username/algorithm-visualizer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-github-blue/10 to-transparent opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to my <span className="bg-clip-text text-transparent bg-gradient-to-r from-github-blue to-github-purple">GitHub Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A showcase of my projects, skills, and contributions to the open-source community. 
                Explore my repositories and get to know my work.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-github-blue hover:bg-github-blue/90">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800/50">
                  View Resume
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-github-blue/20 to-github-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-full h-full border border-gray-800/50 flex items-center justify-center p-4">
                <div className="text-center space-y-4">
                  <Github className="h-20 w-20 mx-auto text-github-blue" />
                  <div>
                    <h3 className="text-2xl font-bold">Your Name</h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                  </div>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold">24</p>
                      <p className="text-xs text-gray-400">Repositories</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold">126</p>
                      <p className="text-xs text-gray-400">Stars</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold">87</p>
                      <p className="text-xs text-gray-400">PRs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section id="projects" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((repo) => (
              <RepoCard 
                key={repo.name}
                name={repo.name}
                description={repo.description}
                stars={repo.stars}
                forks={repo.forks}
                language={repo.language}
                url={repo.url}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800/50">
              View All Repositories
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* GitHub Stats Section */}
      <StatsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
