
import React, { useState, useEffect } from 'react';
import { Copy, Check, Trash2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { Snippet } from "@/pages/CodeSnippetManager";
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/themes/prism-okaidia.css';

interface CodeSnippetProps {
  snippet: Snippet;
  onDelete: () => void;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippet, onDelete }) => {
  const [copied, setCopied] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [snippet]);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    toast.success("Copied to clipboard!");
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-gray-700 bg-gray-800/50 overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">{snippet.title}</h3>
          <p className="text-sm text-gray-400">{snippet.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline"
            size="sm"
            className="border-gray-700 hover:bg-gray-700"
            onClick={handleCopy}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="ml-2 hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </Button>
          
          {showConfirmDelete ? (
            <div className="flex items-center gap-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={onDelete}
              >
                Confirm
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowConfirmDelete(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-red-400"
              onClick={() => setShowConfirmDelete(true)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Code block */}
      <div className="max-h-96 overflow-auto p-1 bg-[#272822]"> {/* Okaidia theme background */}
        <pre className="p-4 text-sm">
          <code className={`language-${snippet.language}`}>{snippet.code}</code>
        </pre>
      </div>
      
      {/* Snippet metadata */}
      <div className="p-3 bg-gray-900/50 flex flex-wrap items-center gap-2">
        <Badge variant="outline" className="text-xs bg-gray-700/50 hover:bg-gray-700">
          {snippet.language}
        </Badge>
        
        {snippet.tags.map(tag => (
          <Badge key={tag} variant="outline" className="text-xs bg-github-blue/20 hover:bg-github-blue/30 text-github-blue border-github-blue/20">
            {tag}
          </Badge>
        ))}
        
        <span className="text-xs text-gray-500 ml-auto">
          {new Date(snippet.createdAt).toLocaleDateString()}
        </span>
      </div>
    </Card>
  );
};

interface SnippetEditorProps {
  onSave: (snippet: Omit<Snippet, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
  languages: string[];
  initialData?: Omit<Snippet, 'id' | 'createdAt'>;
}

export const SnippetEditor: React.FC<SnippetEditorProps> = ({ 
  onSave, 
  onCancel, 
  languages,
  initialData 
}) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [code, setCode] = useState(initialData?.code || '');
  const [language, setLanguage] = useState(initialData?.language || languages[0]);
  const [description, setDescription] = useState(initialData?.description || '');
  const [tagsInput, setTagsInput] = useState(initialData?.tags.join(', ') || '');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    
    if (!code.trim()) {
      toast.error("Code snippet is required");
      return;
    }
    
    const tags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
    
    onSave({
      title,
      code,
      language,
      description,
      tags
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Snippet title"
            className="bg-gray-700/50 border-gray-600"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Language</label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="bg-gray-700/50 border-gray-600">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map(lang => (
                <SelectItem key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Description</label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description of the snippet"
          className="bg-gray-700/50 border-gray-600"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Code</label>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code snippet here..."
          className="min-h-[200px] font-mono bg-gray-700/50 border-gray-600"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Tags (comma separated)</label>
        <Input
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="react, hooks, etc."
          className="bg-gray-700/50 border-gray-600"
        />
      </div>
      
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel} className="border-gray-700">
          Cancel
        </Button>
        <Button type="submit" className="bg-github-blue hover:bg-github-blue/90">
          Save Snippet
        </Button>
      </div>
    </form>
  );
};
