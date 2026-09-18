import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { resourcesData } from '../data/resourcesData';
import { ExternalLink, Search, Sparkles, Heart } from 'lucide-react';

interface ResourcesViewProps {
  onNavigate: (page: PageId) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Girls in Tech',
    'Free Courses',
    'Documentation',
    'Interactive Tutorials',
    'Design & Colors',
    'Useful Tools'
  ];

  const filteredResources = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return resourcesData.filter(res => {
      const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
      const matchesSearch = !q || (
        res.name.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.tag.toLowerCase().includes(q)
      );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'Resources', active: true }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-[#EAE5DE]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono uppercase tracking-wider mb-3">
          <span>✿</span>
          <span>Curated Learning Directory</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-3">
          Trusted Tools & Communities
        </h1>

        <p className="text-stone-600 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
          A hand-vetted collection of free learning platforms, official documentation, 
          empowering communities for girls in technology, and design inspiration studios.
        </p>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platforms (e.g. Odin, Girls Who Code)..."
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
      </header>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl border border-[#EAE5DE] p-6 hover:border-rose-200 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/60 inline-block mb-1">
                    {res.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-stone-900">
                    {res.name}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full shrink-0">
                  {res.tag}
                </span>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed mt-2 mb-4">
                {res.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
              <span className="text-xs font-mono text-stone-400">
                100% Free & Open Access
              </span>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 hover:text-rose-700 transition-colors"
              >
                <span>Visit Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
