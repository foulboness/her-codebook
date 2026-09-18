export type PageId = 
  | 'home'
  | 'html'
  | 'css'
  | 'javascript'
  | 'python'
  | 'git'
  | 'webdev'
  | 'devtools'
  | 'cheatsheets'
  | 'glossary'
  | 'resources'
  | 'projects';

export interface SubLesson {
  id: string;
  title: string;
  badge?: string;
  summary: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
        filename?: string;
      };
      callout?: {
        type: 'tip' | 'note' | 'remember';
        text: string;
      };
    }[];
  };
}

export interface TopicGuide {
  id: PageId;
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: string; // Lucide icon name
  readTime: string;
  difficulty: 'Beginner' | 'Beginner-Friendly' | 'Intermediate';
  accentColor: string;
  lessons: SubLesson[];
  keyTakeaways: string[];
}

export interface CheatSheetCategory {
  id: string;
  title: string;
  badge: string;
  items: {
    name: string;
    description: string;
    code: string;
    syntaxHighlight?: string;
    tip?: string;
  }[];
}

export interface GlossaryTerm {
  term: string;
  category: 'General' | 'Frontend' | 'Backend' | 'Git' | 'JavaScript' | 'Python';
  pronunciation?: string;
  definition: string;
  plainEnglish: string; // Everyday analogy
  example?: string;
}

export interface ResourceItem {
  id: string;
  name: string;
  category: 'Documentation' | 'Interactive Tutorials' | 'Free Courses' | 'Girls in Tech' | 'Design & Colors' | 'Useful Tools';
  description: string;
  url: string;
  tag: string;
  featured?: boolean;
}

export interface ProjectIdea {
  id: string;
  title: string;
  difficulty: 'Easy First Step' | 'Weekend Fun' | 'Portfolio Builder';
  timeEstimate: string;
  techStack: string[];
  summary: string;
  whyBuildIt: string;
  features: string[];
  starterSteps: string[];
  starterCode?: {
    filename: string;
    language: string;
    code: string;
  };
}
