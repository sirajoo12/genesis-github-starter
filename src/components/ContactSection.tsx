
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Connect With Me</h3>
            <p className="text-muted-foreground">
              I'm always open to collaboration opportunities, project discussions, or just a friendly chat about technology.
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 text-muted-foreground hover:text-github-blue transition-colors">
                <Github className="h-5 w-5" />
                <span>github.com/yourusername</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#0A66C2] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/yourusername</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#1DA1F2] transition-colors">
                <Twitter className="h-5 w-5" />
                <span>twitter.com/yourusername</span>
              </a>
              <a href="mailto:email@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-red-500 transition-colors">
                <Mail className="h-5 w-5" />
                <span>email@example.com</span>
              </a>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-purple-500 transition-colors">
                <Globe className="h-5 w-5" />
                <span>yourwebsite.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Send Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm mb-1 block">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-black/5 border-gray-800/20" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm mb-1 block">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-black/5 border-gray-800/20" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm mb-1 block">Subject</label>
                <Input id="subject" placeholder="Message subject" className="bg-black/5 border-gray-800/20" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm mb-1 block">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="bg-black/5 border-gray-800/20 resize-none" 
                  rows={5}
                />
              </div>
              <Button className="w-full bg-github-blue hover:bg-github-blue/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
