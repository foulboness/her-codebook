import React from 'react';
import { PageId } from '../types';
import { guidesData } from '../data/guidesData';
import { 
  CodeXml, Palette, Sparkles, Terminal, GitBranch, Globe, 
  Wrench, BookOpen, Bookmark, Lightbulb, ArrowRight, 
  Search, CheckCircle2, Heart, Star, Compass
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, lessonId?: string) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenSearch }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CodeXml': return <CodeXml className="w-5 h-5 text-rose-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-500" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-rose-500" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-500" />;
      case 'Globe': return <Globe className="w-5 h-5 text-rose-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-rose-500" />;
      default: return <BookOpen className="w-5 h-5 text-rose-500" />;
    }
  };

  const recentlyAddedGuides = [
    {
      topicId: 'css' as PageId,
      lessonId: 'flexbox',
      topicTitle: 'CSS Styling',
      lessonTitle: 'Flexbox Layouts & Centering Secrets',
      readTime: '5 min read',
      tag: 'Layout & Design'
    },
    {
      topicId: 'javascript' as PageId,
      lessonId: 'dom-events',
      topicTitle: 'JavaScript Magic',
      lessonTitle: 'The DOM & Interactive Heart Clickers',
      readTime: '6 min read',
      tag: 'Interactivity'
    },
    {
      topicId: 'git' as PageId,
      lessonId: 'branches-prs',
      topicTitle: 'Git & GitHub',
      lessonTitle: 'Branching & Pull Request Etiquette',
      readTime: '4 min read',
      tag: 'Version Control'
    },
    {
      topicId: 'python' as PageId,
      lessonId: 'python-loops',
      topicTitle: 'Python for Beginners',
      lessonTitle: 'Study Streak Trackers & Loops',
      readTime: '5 min read',
      tag: 'Logic & Loops'
    }
  ];

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Editorial Hero Welcome Section */}
      <section className="relative text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/70 text-rose-800 text-xs font-mono uppercase tracking-wider mb-6">
          <span>✿</span>
          <span>A Warm Welcome to New Learners</span>
          <span>✿</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight leading-[1.15] mb-6">
          Crafting software is an act of <span className="italic underline decoration-rose-200 decoration-wavy underline-offset-8">gentle imagination</span>.
        </h2>

        <p className="text-stone-600 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
          Welcome to <strong className="font-medium text-stone-900">Her Codebook</strong> — a digital handbook for girls learning to code. 
          Written like your favorite notebook, filled with practical guides, friendly explanations, and zero gatekeeping.
        </p>

        {/* Hero Quick Search / Trigger Bar */}
        <div className="max-w-xl mx-auto relative mb-10">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white border border-[#E5DFD7] hover:border-rose-300 shadow-xs hover:shadow-sm transition-all text-stone-400 group text-left"
          >
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
              <span className="text-stone-500 font-sans text-sm">
                What would you like to build or learn today?
              </span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60 font-mono">
              Search library ✦
            </span>
          </button>
        </div>

        {/* Quick Jump Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-600">
          <span className="text-stone-400 font-mono text-[11px] uppercase tracking-wider">Explore:</span>
          {[
            { label: 'HTML Structure', page: 'html' as PageId },
            { label: 'CSS Flexbox', page: 'css' as PageId },
            { label: 'JavaScript Basics', page: 'javascript' as PageId },
            { label: 'Python Scripts', page: 'python' as PageId },
            { label: 'Cheat Sheets', page: 'cheatsheets' as PageId },
            { label: 'A-Z Glossary', page: 'glossary' as PageId },
            { label: 'Project Ideas', page: 'projects' as PageId },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className="px-3 py-1 rounded-full bg-stone-100/80 hover:bg-rose-50 hover:text-rose-800 border border-stone-200/80 hover:border-rose-200 transition-all font-sans"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Topics / Category Cards */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE5DE] gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400">
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>Handbook Curricula</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mt-1">
              Featured Topics & Chapters
            </h3>
          </div>
          <p className="text-xs text-stone-500 max-w-sm sm:text-right font-sans">
            Carefully paced, beginner-friendly chapters designed to guide you step-by-step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(guidesData).map((guide) => (
            <div
              key={guide.id}
              onClick={() => onNavigate(guide.id)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#EAE5DE] p-6 hover:border-rose-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top blush bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-100 via-rose-300 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FDF2F4] border border-[#F8D7DE] group-hover:scale-105 transition-transform">
                    {getIcon(guide.icon)}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                    <span className="px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200 text-stone-600">
                      {guide.difficulty}
                    </span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700">
                  {guide.category}
                </span>
                <h4 className="font-serif text-xl font-normal text-stone-900 mt-1 mb-2 group-hover:text-rose-900 transition-colors">
                  {guide.title}
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed font-sans line-clamp-3 mb-4">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-stone-500 font-sans">
                <span className="font-mono text-[11px] text-stone-400">
                  {guide.lessons.length} Lessons Included
                </span>
                <span className="flex items-center gap-1 font-medium text-stone-800 group-hover:text-rose-700 transition-colors">
                  Read Chapter <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added Guides / Spotlight Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-white border border-[#EAE5DE] p-6 sm:p-10 relative overflow-hidden shadow-xs">
          {/* Subtle dotted notebook styling */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#F0EAE1]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-700">
                <Star className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                <span>Recently Added Lessons</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mt-1">
                Handpicked Field Lessons
              </h3>
            </div>
            <button
              onClick={() => onNavigate('cheatsheets')}
              className="text-xs px-3.5 py-1.5 rounded-full border border-stone-200 hover:border-rose-200 hover:bg-rose-50 text-stone-600 hover:text-rose-800 transition-all font-sans inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Bookmark className="w-3.5 h-3.5 text-rose-400" />
              <span>Browse All Reference Sheets</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentlyAddedGuides.map((guide, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(guide.topicId, guide.lessonId)}
                className="group cursor-pointer p-4 rounded-xl border border-[#EAE5DE] hover:border-rose-200 hover:bg-[#FAF8F5] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                    {guide.topicTitle}
                  </span>
                  <h4 className="font-serif text-base font-normal text-stone-900 group-hover:text-rose-900 transition-colors leading-snug mb-2">
                    {guide.lessonTitle}
                  </h4>
                </div>
                <div className="flex items-center justify-between pt-3 text-[11px] text-stone-500 font-sans border-t border-[#F5EFEB]">
                  <span className="text-rose-700 font-medium">{guide.tag}</span>
                  <span className="font-mono text-stone-400">{guide.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Trio: Cheat Sheets, Glossary & Project Ideas */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Cheat Sheets */}
          <div
            onClick={() => onNavigate('cheatsheets')}
            className="group cursor-pointer rounded-2xl bg-white border border-[#EAE5DE] p-6 hover:border-rose-200 hover:shadow-xs transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 text-rose-600 group-hover:scale-105 transition-transform">
              <CodeXml className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl font-normal text-stone-900 mb-1">
              Quick Cheat Sheets
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
              Rapid-lookup syntax guides for HTML tags, CSS Flexbox & Grid, JavaScript array methods, and Git commands.
            </p>
            <span className="text-xs font-medium text-stone-800 group-hover:text-rose-700 flex items-center gap-1">
              View Syntax Cheats <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Card 2: A-Z Glossary */}
          <div
            onClick={() => onNavigate('glossary')}
            className="group cursor-pointer rounded-2xl bg-white border border-[#EAE5DE] p-6 hover:border-rose-200 hover:shadow-xs transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 text-rose-600 group-hover:scale-105 transition-transform">
              <Bookmark className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl font-normal text-stone-900 mb-1">
              A–Z Coding Glossary
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
              Clear, friendly explanations of technical words with relatable analogies. Never feel confused by acronyms again.
            </p>
            <span className="text-xs font-medium text-stone-800 group-hover:text-rose-700 flex items-center gap-1">
              Browse Terminology <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Card 3: Project Ideas */}
          <div
            onClick={() => onNavigate('projects')}
            className="group cursor-pointer rounded-2xl bg-white border border-[#EAE5DE] p-6 hover:border-rose-200 hover:shadow-xs transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 text-rose-600 group-hover:scale-105 transition-transform">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl font-normal text-stone-900 mb-1">
              Beginner Project Ideas
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
              Aesthetic, tangible projects designed for your practice: Link-in-Bio pages, Pomodoro timers, and reading journals.
            </p>
            <span className="text-xs font-medium text-stone-800 group-hover:text-rose-700 flex items-center gap-1">
              Get Building Ideas <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>

      {/* Gentle Notebook Manifesto Note */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="notebook-paper p-8 sm:p-12 rounded-3xl border border-[#EAE5DE] shadow-xs relative">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-2xl text-rose-400">✿</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
              A note from the notebook margins
            </h3>
            <p className="font-serif italic text-stone-700 text-base sm:text-lg leading-relaxed">
              “You don’t need a computer science degree to build things that are beautiful, useful, or uniquely yours. 
              The internet is a canvas. Take your time, break things safely, and remember that every expert was once staring at their very first blank file.”
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-widest">
              <span>✦ Her Codebook Editorial ✦</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
