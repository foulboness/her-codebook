import React, { useState, useMemo } from 'react';
import { PageId, GlossaryTerm } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { glossaryData } from '../data/glossaryData';
import { Search, Bookmark, Sparkles, Filter } from 'lucide-react';

interface GlossaryViewProps {
  onNavigate: (page: PageId) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onNavigate }) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Available unique letters
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    glossaryData.forEach(item => {
      letters.add(item.term.charAt(0).toUpperCase());
    });
    return Array.from(letters).sort();
  }, []);

  const categories = ['All', 'General', 'Frontend', 'Backend', 'JavaScript', 'Python', 'Git'];

  const filteredTerms = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return glossaryData.filter(item => {
      const matchesSearch = !q || (
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.plainEnglish.toLowerCase().includes(q)
      );

      const matchesLetter = selectedLetter === 'ALL' || item.term.charAt(0).toUpperCase() === selectedLetter;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesLetter && matchesCategory;
    });
  }, [searchQuery, selectedLetter, selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'Glossary', active: true }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-[#EAE5DE]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono uppercase tracking-wider mb-3">
          <span>✿</span>
          <span>A–Z Jargon-Free Encyclopedia</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-3">
          The Plain-English Coding Glossary
        </h1>

        <p className="text-stone-600 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
          Technical jargon can feel intimidating when you first encounter it. 
          Here, every term is translated into clear definitions with everyday, real-world analogies.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search words (e.g. DOM, boolean, API)..."
                className="w-full pl-9.5 pr-4 py-2 text-xs rounded-full bg-white border border-[#EAE5DE] focus:outline-none focus:border-rose-400 font-sans text-stone-800"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white font-medium shadow-2xs'
                      : 'bg-white hover:bg-rose-50 text-stone-600 border border-[#EAE5DE] hover:border-rose-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Alphabet A-Z Bar */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none border-t border-[#F0EAE1] pt-3">
            <button
              onClick={() => setSelectedLetter('ALL')}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                selectedLetter === 'ALL'
                  ? 'bg-rose-100 text-rose-900 font-bold'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              ALL
            </button>
            {availableLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-7 h-7 rounded flex items-center justify-center text-xs font-mono transition-colors ${
                  selectedLetter === letter
                    ? 'bg-rose-500 text-white font-bold'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Glossary Items List */}
      <div>
        <div className="flex items-center justify-between mb-4 text-xs font-mono text-stone-400">
          <span>SHOWING {filteredTerms.length} OF {glossaryData.length} TERMS</span>
          <span>A–Z ORDER</span>
        </div>

        {filteredTerms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE5DE] p-8">
            <span className="text-2xl block mb-2">✿</span>
            <p className="font-serif italic text-stone-700 text-lg">
              No terms found matching “{searchQuery}”.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedLetter('ALL'); setSelectedCategory('All'); }}
              className="mt-4 text-xs px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-800 hover:bg-rose-100 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EAE5DE] p-5 hover:border-rose-200 hover:shadow-2xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-medium text-stone-900">
                      {item.term}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-700 bg-rose-50/80 px-2 py-0.5 rounded border border-rose-200/60">
                      {item.category}
                    </span>
                  </div>

                  {/* Plain English Everyday Analogy */}
                  <div className="my-2.5 p-3 rounded-xl bg-[#FDF2F4] border border-[#F8D7DE] text-xs font-sans text-[#7E2A40]">
                    <span className="font-serif italic font-medium block text-[11px] mb-0.5 text-rose-900">
                      Everyday Analogy ✿
                    </span>
                    <p className="leading-relaxed">
                      {item.plainEnglish}
                    </p>
                  </div>

                  {/* Formal definition */}
                  <p className="text-stone-600 text-xs font-sans leading-relaxed mt-2">
                    <strong className="text-stone-800 font-medium">Technical Definition:</strong> {item.definition}
                  </p>
                </div>

                {item.example && (
                  <div className="mt-3 pt-2.5 border-t border-[#F5EFEB]">
                    <span className="text-[10px] font-mono text-stone-400 block mb-1">Example:</span>
                    <code className="text-xs font-mono bg-stone-50 text-stone-700 px-2 py-1 rounded border border-stone-200 block overflow-x-auto">
                      {item.example}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
