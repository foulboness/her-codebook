import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './views/HomeView';
import { TopicView } from './views/TopicView';
import { CheatSheetsView } from './views/CheatSheetsView';
import { GlossaryView } from './views/GlossaryView';
import { ResourcesView } from './views/ResourcesView';
import { ProjectIdeasView } from './views/ProjectIdeasView';
import { guidesData } from './data/guidesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentLessonId, setCurrentLessonId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search modal (Cmd+K, Ctrl+K, or '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageId, lessonId?: string) => {
    setCurrentPage(page);
    setCurrentLessonId(lessonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Centered Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {/* Dynamic Topic Guide pages (HTML, CSS, JS, Python, Git, Web Dev, Dev Tools) */}
        {['html', 'css', 'javascript', 'python', 'git', 'webdev', 'devtools'].includes(currentPage) && (
          <TopicView
            key={currentPage}
            guide={guidesData[currentPage]}
            initialLessonId={currentLessonId}
            onNavigate={handleNavigate}
          />
        )}

        {/* Cheat Sheets */}
        {currentPage === 'cheatsheets' && (
          <CheatSheetsView onNavigate={handleNavigate} />
        )}

        {/* Glossary */}
        {currentPage === 'glossary' && (
          <GlossaryView onNavigate={handleNavigate} />
        )}

        {/* Resources */}
        {currentPage === 'resources' && (
          <ResourcesView onNavigate={handleNavigate} />
        )}

        {/* Project Ideas */}
        {currentPage === 'projects' && (
          <ProjectIdeasView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Searchable Resource Library Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPage={handleNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
}
