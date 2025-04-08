
import React from 'react';
import { Github, GitFork, Star, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-800/20 bg-black/5 backdrop-blur-lg fixed top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Github className="h-6 w-6 text-github-blue" />
            <span className="font-bold text-xl">Portfolio</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm hover:text-github-blue transition-colors">Home</Link>
          <a href="#projects" className="text-sm hover:text-github-blue transition-colors">Projects</a>
          <a href="#skills" className="text-sm hover:text-github-blue transition-colors">Skills</a>
          <a href="#stats" className="text-sm hover:text-github-blue transition-colors">Stats</a>
          <Link to="/snippets" className="text-sm hover:text-github-blue transition-colors flex items-center gap-1">
            <Code className="w-4 h-4" />
            Snippets
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-xs">Star</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <GitFork className="h-4 w-4 text-github-green" />
            <span className="text-xs">Fork</span>
          </div>
          <Button size="sm" variant="outline" className="border-github-blue text-github-blue hover:bg-github-blue/10">
            <Github className="h-4 w-4 mr-2" />
            View on GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
