
import React from 'react';
import { Star, GitFork, Code } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type RepoCardProps = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
};

const RepoCard: React.FC<RepoCardProps> = ({ name, description, stars, forks, language, url }) => {
  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
    Python: "bg-green-500",
    Java: "bg-red-500",
    "C++": "bg-pink-500",
    PHP: "bg-indigo-500",
    Ruby: "bg-red-600",
    default: "bg-gray-500"
  };

  const langColorClass = languageColors[language] || languageColors.default;

  return (
    <Card className="border border-gray-800/30 bg-black/10 hover:border-github-blue/50 transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-github-blue" />
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-github-blue transition-colors"
          >
            {name}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className={`h-3 w-3 rounded-full ${langColorClass}`}></div>
          <span className="text-xs text-gray-400">{language}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400" />
            <span className="text-xs text-gray-400">{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3 w-3 text-github-green" />
            <span className="text-xs text-gray-400">{forks}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;
