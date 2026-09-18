import React, { useState } from 'react';
import { Search, Menu, X, BookHeart, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavItems: { id: PageId; label: string; symbol?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python' },
    { id: 'git', label: 'Git & GitHub' },
    { id: 'webdev', label: 'Web Dev' },
    { id: 'devtools', label: 'Dev Tools' },
    { id: 'cheatsheets', label: 'Cheat Sheets' },
    { id: 'glossary', label: 'Glossary' },
    { id: 'resources', label: 'Resources' },
    { id: 'projects', label: 'Project Ideas' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DE] transition-all">
      {/* Delicate Top Ribbon Announcement */}
      <div className="bg-[#FDF2F4] border-b border-[#F8D7DE]/70 px-4 py-1 text-center text-[11px] text-[#9F3E57] font-sans tracking-wide flex items-center justify-center gap-2">
        <span className="text-[10px]">✿</span>
        <span>A little handbook for girls learning to build things on the internet</span>
        <span className="text-[10px]">✿</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header Row with Centered Logo */}
        <div className="flex items-center justify-between py-3.5 border-b border-[#F0EAE1]">
          {/* Left: Quick search trigger button */}
          <div className="flex items-center">
            <button
              onClick={onOpenSearch}
              id="global-search-btn"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E2D8] hover:border-rose-300 hover:bg-rose-50/40 text-stone-600 text-xs transition-all shadow-2xs group"
              title="Search handbook (or press /)"
            >
              <Search className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-500 transition-colors" />
              <span className="hidden sm:inline text-stone-500 group-hover:text-stone-700">Search guides & terms...</span>
              <span className="sm:hidden text-stone-500">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-stone-100 text-stone-400 rounded border border-stone-200">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="text-center cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="inline-flex items-center gap-2">
              <span className="text-rose-400 text-sm">✦</span>
              <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 hover:text-stone-700 transition-colors">
                Her Codebook
              </h1>
              <span className="text-rose-400 text-sm">✦</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase font-mono text-stone-400 -mt-0.5">
              Digital Handbook & Field Guide
            </p>
          </div>

          {/* Right: Handbook bookmark / Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleLinkClick('cheatsheets')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50/80 border border-rose-200 text-rose-800 text-xs font-medium hover:bg-rose-100/80 transition-all shadow-2xs"
            >
              <BookHeart className="w-3.5 h-3.5 text-rose-500" />
              <span>Quick Cheats</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Centered Navigation Bar Row (Desktop) */}
        <nav className="hidden md:flex items-center justify-center py-2.5 overflow-x-auto scrollbar-none gap-1">
          {primaryNavItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-1 text-[13px] font-sans rounded-full transition-all whitespace-nowrap relative ${
                  isActive
                    ? 'text-stone-900 font-semibold bg-white border border-[#E5DFD7] shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40 border border-transparent'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 mr-1.5 -translate-y-0.5" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE5DE] px-4 py-4 space-y-1 animate-in slide-in-from-top duration-200">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 px-3 py-1">
            Handbook Sections
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3 py-2 rounded-xl text-sm font-sans transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-rose-50 text-rose-900 font-medium border border-rose-200'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-rose-500" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
