
import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-800/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Github className="h-5 w-5 text-github-blue" />
            <span className="font-bold">GitHub Portfolio</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>© {currentYear}</span>
          </div>
          
          <div className="hidden md:flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-github-blue transition-colors">Home</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-github-blue transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-github-blue transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-github-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
