import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Code2, Bookmark, Lightbulb, ExternalLink } from 'lucide-react';
import { PageId } from '../types';
import { guidesData } from '../data/guidesData';
import { cheatSheetsData } from '../data/cheatsheetsData';
import { glossaryData } from '../data/glossaryData';
import { projectsData } from '../data/projectsData';
import { resourcesData } from '../data/resourcesData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageId: PageId, lessonId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPage
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: {
      type: 'Guide' | 'Cheat Sheet' | 'Glossary' | 'Project' | 'Resource';
      title: string;
      snippet: string;
      action: () => void;
    }[] = [];

    // Search guides
    Object.values(guidesData).forEach(guide => {
      if (guide.title.toLowerCase().includes(q) || guide.description.toLowerCase().includes(q)) {
        results.push({
          type: 'Guide',
          title: guide.title,
          snippet: guide.description,
          action: () => {
            onSelectPage(guide.id);
            onClose();
          }
        });
      }
      // search lessons inside guides
      guide.lessons.forEach(lesson => {
        if (lesson.title.toLowerCase().includes(q) || lesson.summary.toLowerCase().includes(q)) {
          results.push({
            type: 'Guide',
            title: `${guide.title} › ${lesson.title}`,
            snippet: lesson.summary,
            action: () => {
              onSelectPage(guide.id, lesson.id);
              onClose();
            }
          });
        }
      });
    });

    // Search cheat sheets
    cheatSheetsData.forEach(cat => {
      cat.items.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.code.toLowerCase().includes(q)) {
          results.push({
            type: 'Cheat Sheet',
            title: `${cat.title}: ${item.name}`,
            snippet: item.description,
            action: () => {
              onSelectPage('cheatsheets');
              onClose();
            }
          });
        }
      });
    });

    // Search glossary
    glossaryData.forEach(term => {
      if (term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q) || term.plainEnglish.toLowerCase().includes(q)) {
        results.push({
          type: 'Glossary',
          title: term.term,
          snippet: `${term.plainEnglish} (${term.definition.slice(0, 80)}...)`,
          action: () => {
            onSelectPage('glossary');
            onClose();
          }
        });
      }
    });

    // Search projects
    projectsData.forEach(proj => {
      if (proj.title.toLowerCase().includes(q) || proj.summary.toLowerCase().includes(q) || proj.techStack.some(t => t.toLowerCase().includes(q))) {
        results.push({
          type: 'Project',
          title: proj.title,
          snippet: `${proj.difficulty} • ${proj.summary}`,
          action: () => {
            onSelectPage('projects');
            onClose();
          }
        });
      }
    });

    // Search resources
    resourcesData.forEach(res => {
      if (res.name.toLowerCase().includes(q) || res.description.toLowerCase().includes(q) || res.category.toLowerCase().includes(q)) {
        results.push({
          type: 'Resource',
          title: res.name,
          snippet: res.description,
          action: () => {
            onSelectPage('resources');
            onClose();
          }
        });
      }
    });

    return results.slice(0, 16);
  }, [query, onSelectPage, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-stone-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] shadow-2xl overflow-hidden text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E8E2D8] bg-white gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, cheat sheets, glossary terms, projects..."
            className="w-full bg-transparent text-base focus:outline-none placeholder:text-stone-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-stone-100 text-stone-500 hover:text-stone-800 border border-stone-200"
          >
            Esc
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-[#F0EAE1]">
          {query.trim() === '' ? (
            <div className="py-8 px-4 text-center">
              <span className="text-xl mb-2 block">✦</span>
              <p className="font-serif italic text-base text-stone-700 mb-1">
                Looking for something specific?
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
                Try searching for “flexbox”, “variables”, “pull request”, “git commit”, or “book tracker”.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Flexbox', 'HTML Forms', 'JavaScript Arrays', 'Python Loops', 'Git Branches', 'API', 'Project Ideas'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1 rounded-full bg-white border border-[#E8E2D8] hover:border-rose-300 hover:bg-rose-50/50 text-stone-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-stone-500 text-sm font-serif italic">
              No entries found for “{query}”. Try another keyword or browse our curated sections! ✿
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-2 py-1 text-[11px] font-mono tracking-wider text-stone-400 uppercase">
                {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
              </div>
              {searchResults.map((result, idx) => (
                <button
                  key={idx}
                  onClick={result.action}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-white hover:border-[#E8E2D8] border border-transparent transition-all flex items-start gap-3 group"
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-rose-50 text-rose-700 group-hover:bg-rose-100 transition-colors">
                    {result.type === 'Guide' && <BookOpen className="w-4 h-4" />}
                    {result.type === 'Cheat Sheet' && <Code2 className="w-4 h-4" />}
                    {result.type === 'Glossary' && <Bookmark className="w-4 h-4" />}
                    {result.type === 'Project' && <Lightbulb className="w-4 h-4" />}
                    {result.type === 'Resource' && <ExternalLink className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 bg-rose-50/80 px-1.5 py-0.5 rounded">
                        {result.type}
                      </span>
                      <h4 className="text-sm font-medium text-stone-900 truncate group-hover:text-rose-900">
                        {result.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-1">
                      {result.snippet}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#F5EFEB] border-t border-[#E8E2D8] flex items-center justify-between text-[11px] text-stone-500 font-sans">
          <span>Her Codebook • Searchable Resource Library</span>
          <span className="italic font-serif">“Curiosity is your superpower” ✦</span>
        </div>
      </div>
    </div>
  );
};
