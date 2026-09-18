import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CodeBlock } from '../components/CodeBlock';
import { cheatSheetsData } from '../data/cheatsheetsData';
import { Search, Sparkles, Filter, Copy, Check } from 'lucide-react';

interface CheatSheetsViewProps {
  onNavigate: (page: PageId) => void;
}

export const CheatSheetsView: React.FC<CheatSheetsViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    return [
      { id: 'all', label: 'All Cheat Sheets' },
      ...cheatSheetsData.map(c => ({ id: c.id, label: c.title }))
    ];
  }, []);

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return cheatSheetsData
      .filter(category => selectedCategory === 'all' || category.id === selectedCategory)
      .map(category => {
        const matchingItems = category.items.filter(item => {
          if (!q) return true;
          return (
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.code.toLowerCase().includes(q)
          );
        });

        return {
          ...category,
          items: matchingItems
        };
      })
      .filter(category => category.items.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'Cheat Sheets', active: true }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="mb-10 pb-8 border-b border-[#EAE5DE]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono uppercase tracking-wider mb-3">
          <span>✦</span>
          <span>Quick Reference Pocketbook</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-3">
          Syntax & Command Cheat Sheets
        </h1>

        <p className="text-stone-600 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
          Quick-glance templates, terminal instructions, and layout snippets. 
          Copy and paste directly into your projects whenever memory needs a gentle reminder.
        </p>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter snippets (e.g. flexbox, map, pr)..."
              className="w-full pl-9.5 pr-4 py-2 text-xs rounded-full bg-white border border-[#EAE5DE] focus:outline-none focus:border-rose-400 font-sans text-stone-800"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white font-medium shadow-2xs'
                    : 'bg-white hover:bg-rose-50 text-stone-600 border border-[#EAE5DE] hover:border-rose-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Sheets Content */}
      <div className="space-y-12">
        {filteredData.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE5DE] p-8">
            <span className="text-2xl block mb-2">✿</span>
            <p className="font-serif italic text-stone-700 text-lg">
              No cheat sheets matched your query “{searchQuery}”.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 text-xs px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-800 hover:bg-rose-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredData.map((category) => (
            <section key={category.id} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    {category.badge}
                  </span>
                  <h2 className="font-serif text-2xl font-normal text-stone-900">
                    {category.title}
                  </h2>
                </div>
                <span className="text-xs font-mono text-stone-400">
                  {category.items.length} {category.items.length === 1 ? 'snippet' : 'snippets'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#EAE5DE] p-5 sm:p-6 shadow-2xs"
                  >
                    <div className="mb-2">
                      <h3 className="font-serif text-lg font-normal text-stone-900">
                        {item.name}
                      </h3>
                      <p className="text-stone-500 text-xs font-sans mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <CodeBlock
                      code={item.code}
                      language={category.id.includes('python') ? 'python' : category.id.includes('css') ? 'css' : category.id.includes('git') ? 'bash' : 'html'}
                    />

                    {item.tip && (
                      <p className="text-[11px] font-sans text-stone-500 italic mt-2">
                        Tip: {item.tip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
};
