
import React, { useState, useEffect } from 'react';
import { Search, Plus, Copy, Check, Trash2, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CodeSnippet, SnippetEditor } from "@/components/CodeSnippetComponents";

export type Snippet = {
  id: string;
  title: string;
  code: string;
  language: string;
  description: string;
  createdAt: Date;
  tags: string[];
};

const LANGUAGES = [
  "javascript", "typescript", "python", "java", "csharp", "html", "css", 
  "sql", "bash", "ruby", "go", "rust", "php", "swift", "kotlin"
];

const SAMPLE_SNIPPETS: Snippet[] = [
  {
    id: "1",
    title: "React useState Hook",
    code: `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}`,
    language: "javascript",
    description: "Basic example of React's useState hook",
    createdAt: new Date(),
    tags: ["react", "hooks"]
  },
  {
    id: "2",
    title: "Python List Comprehension",
    code: `# Create a list of squares\nsquares = [x**2 for x in range(10)]\n\n# Create a list with conditional filtering\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\n\nprint(squares)\nprint(even_squares)`,
    language: "python",
    description: "Examples of list comprehension in Python",
    createdAt: new Date(),
    tags: ["python", "lists"]
  },
  {
    id: "3",
    title: "SQL Join Example",
    code: `SELECT users.name, orders.product\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nWHERE orders.status = 'completed'\nORDER BY orders.created_at DESC;`,
    language: "sql",
    description: "SQL inner join to get users with their orders",
    createdAt: new Date(),
    tags: ["sql", "database"]
  }
];

const CodeSnippetManager = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [filteredSnippets, setFilteredSnippets] = useState<Snippet[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(undefined);
  const [isAddingSnippet, setIsAddingSnippet] = useState(false);

  // Load sample snippets on initial render
  useEffect(() => {
    // In a real app, you'd load from localStorage or a database
    setSnippets(SAMPLE_SNIPPETS);
    setFilteredSnippets(SAMPLE_SNIPPETS);
  }, []);

  useEffect(() => {
    let result = snippets;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(snippet => 
        snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by language
    if (selectedLanguage) {
      result = result.filter(snippet => snippet.language === selectedLanguage);
    }
    
    setFilteredSnippets(result);
  }, [snippets, searchTerm, selectedLanguage]);

  const handleAddSnippet = (snippet: Omit<Snippet, 'id' | 'createdAt'>) => {
    const newSnippet: Snippet = {
      ...snippet,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    setSnippets(prev => [newSnippet, ...prev]);
    setIsAddingSnippet(false);
    toast.success("Snippet added successfully!");
  };

  const handleDeleteSnippet = (id: string) => {
    setSnippets(prev => prev.filter(snippet => snippet.id !== id));
    toast.success("Snippet deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100">
      <Header />
      
      <main className="container py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Code Snippet Manager</h1>
            <p className="text-gray-400 max-w-lg">
              Save and organize your code snippets by language, with syntax highlighting and easy copying.
            </p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <Button onClick={() => setIsAddingSnippet(true)} className="bg-github-blue hover:bg-github-blue/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Snippet
            </Button>
          </div>
        </div>
        
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search snippets..."
              className="pl-9 bg-gray-800/50 border-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select onValueChange={(value) => setSelectedLanguage(value || undefined)} value={selectedLanguage}>
            <SelectTrigger className="w-full md:w-[180px] bg-gray-800/50 border-gray-700">
              <SelectValue placeholder="All Languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              {LANGUAGES.map(lang => (
                <SelectItem key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {isAddingSnippet ? (
          <Card className="p-6 mb-8 border-gray-700 bg-gray-800/50">
            <h2 className="text-xl font-bold mb-4">Add New Snippet</h2>
            <SnippetEditor onSave={handleAddSnippet} onCancel={() => setIsAddingSnippet(false)} languages={LANGUAGES} />
          </Card>
        ) : null}
        
        {/* Languages tabs on desktop */}
        <div className="hidden md:block mb-8">
          <Tabs defaultValue="all" onValueChange={(value) => setSelectedLanguage(value === "all" ? undefined : value)}>
            <TabsList className="bg-gray-800/50 border border-gray-700 p-1 overflow-x-auto">
              <TabsTrigger value="all" className="data-[state=active]:bg-github-blue data-[state=active]:text-white">
                All
              </TabsTrigger>
              {LANGUAGES.slice(0, 8).map(lang => (
                <TabsTrigger 
                  key={lang} 
                  value={lang}
                  className="data-[state=active]:bg-github-blue data-[state=active]:text-white"
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Snippets list */}
        <div className="space-y-6">
          {filteredSnippets.length > 0 ? (
            filteredSnippets.map(snippet => (
              <CodeSnippet 
                key={snippet.id} 
                snippet={snippet} 
                onDelete={() => handleDeleteSnippet(snippet.id)}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Code className="h-16 w-16 text-gray-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-400">No snippets found</h3>
              <p className="text-gray-500 mt-2">
                {snippets.length > 0 
                  ? "Try adjusting your search or filters" 
                  : "Add your first code snippet using the button above"}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodeSnippetManager;
