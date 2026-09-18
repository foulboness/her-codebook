import React, { useState, useEffect } from 'react';
import { PageId, TopicGuide, SubLesson } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CodeBlock } from '../components/CodeBlock';
import { 
  BookOpen, CheckCircle2, ChevronLeft, ChevronRight, 
  Lightbulb, AlertCircle, Info, Sparkles, Share2, Check
} from 'lucide-react';

interface TopicViewProps {
  guide: TopicGuide;
  initialLessonId?: string;
  onNavigate: (page: PageId, lessonId?: string) => void;
}

export const TopicView: React.FC<TopicViewProps> = ({
  guide,
  initialLessonId,
  onNavigate
}) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(
    initialLessonId || guide.lessons[0]?.id || ''
  );
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialLessonId && guide.lessons.some(l => l.id === initialLessonId)) {
      setActiveLessonId(initialLessonId);
    } else if (guide.lessons.length > 0 && !guide.lessons.some(l => l.id === activeLessonId)) {
      setActiveLessonId(guide.lessons[0].id);
    }
  }, [initialLessonId, guide]);

  const activeLessonIndex = guide.lessons.findIndex(l => l.id === activeLessonId);
  const currentLesson: SubLesson | undefined = guide.lessons[activeLessonIndex] || guide.lessons[0];

  const prevLesson = activeLessonIndex > 0 ? guide.lessons[activeLessonIndex - 1] : null;
  const nextLesson = activeLessonIndex < guide.lessons.length - 1 ? guide.lessons[activeLessonIndex + 1] : null;

  const handleLessonChange = (lessonId: string) => {
    setActiveLessonId(lessonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: guide.title, pageId: guide.id },
          ...(currentLesson ? [{ label: currentLesson.title, active: true }] : [])
        ]}
        onNavigate={onNavigate}
      />

      {/* Guide Header Banner */}
      <header className="mb-10 pb-8 border-b border-[#EAE5DE]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200/80">
              {guide.category}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs font-mono text-stone-500">
              {guide.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyShare}
              className="text-xs px-3 py-1 rounded-full border border-stone-200 hover:border-rose-300 hover:bg-rose-50/50 text-stone-600 transition-colors flex items-center gap-1.5"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-rose-500" />
                  <span>Link Copied ✿</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-stone-400" />
                  <span>Share Guide</span>
                </>
              )}
            </button>
            <span className="text-xs font-mono text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
              {guide.readTime}
            </span>
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-3">
          {guide.title}
        </h1>

        <p className="font-serif italic text-stone-600 text-lg mb-4">
          “{guide.tagline}”
        </p>

        <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed max-w-3xl">
          {guide.description}
        </p>
      </header>

      {/* Key Takeaways Card */}
      <div className="mb-12 rounded-2xl bg-white border border-[#EAE5DE] p-6 shadow-2xs">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <h3 className="font-serif text-base font-medium text-stone-900">
            Field Notes & Core Takeaways
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-stone-600">
          {guide.keyTakeaways.map((takeaway, i) => (
            <div key={i} className="flex items-start gap-2 bg-[#FAF8F5] p-3 rounded-xl border border-[#F0EAE1]">
              <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Sticky Sidebar of Lessons + Main Article */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Table of Contents / Sub-Lessons Navigation Sidebar */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="sticky top-24 rounded-2xl bg-white border border-[#EAE5DE] p-5 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1] mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                <span>Chapter Contents</span>
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                {activeLessonIndex + 1} of {guide.lessons.length}
              </span>
            </div>

            <nav className="space-y-1.5">
              {guide.lessons.map((lesson, idx) => {
                const isActive = lesson.id === activeLessonId;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleLessonChange(lesson.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all text-xs font-sans flex items-start justify-between group ${
                      isActive
                        ? 'bg-rose-50/80 border border-rose-200 text-rose-950 font-medium shadow-2xs'
                        : 'hover:bg-stone-50 text-stone-600 border border-transparent'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-stone-400 block mb-0.5">
                        Lesson {idx + 1}
                      </span>
                      <span className="leading-snug block group-hover:text-stone-900">
                        {lesson.title}
                      </span>
                    </div>
                    {isActive && (
                      <span className="text-rose-500 font-bold ml-2">✦</span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-center">
              <button
                onClick={() => onNavigate('cheatsheets')}
                className="text-xs text-rose-700 hover:text-rose-900 hover:underline underline-offset-2 font-sans"
              >
                View {guide.title.split(' ')[0]} Cheat Sheet →
              </button>
            </div>
          </div>
        </aside>

        {/* Main Article Reading Pane */}
        <main className="lg:col-span-8 min-w-0">
          {currentLesson ? (
            <article className="bg-white rounded-3xl border border-[#EAE5DE] p-6 sm:p-10 shadow-xs">
              {/* Lesson Badge & Title */}
              <div className="mb-6 pb-6 border-b border-[#F0EAE1]">
                {currentLesson.badge && (
                  <span className="text-[11px] font-mono uppercase tracking-widest text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mb-2 inline-block">
                    {currentLesson.badge}
                  </span>
                )}
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
                  {currentLesson.title}
                </h2>
                <p className="font-serif italic text-stone-500 text-sm mt-1">
                  {currentLesson.summary}
                </p>
              </div>

              {/* Lesson Content Intro */}
              <p className="text-stone-700 font-sans text-sm sm:text-base leading-relaxed mb-8">
                {currentLesson.content.intro}
              </p>

              {/* Sections Breakdown */}
              <div className="space-y-10">
                {currentLesson.content.sections.map((section, idx) => (
                  <section key={idx} className="space-y-3">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900">
                      {section.heading}
                    </h3>
                    <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {section.body}
                    </p>

                    {/* Code Snippet if present */}
                    {section.codeSnippet && (
                      <CodeBlock
                        code={section.codeSnippet.code}
                        language={section.codeSnippet.language}
                        filename={section.codeSnippet.filename}
                      />
                    )}

                    {/* Callout box if present */}
                    {section.callout && (
                      <div className="my-4 p-4 rounded-xl bg-[#FDF2F4] border border-[#F8D7DE] text-xs font-sans text-[#7E2A40] flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          {section.callout.type === 'tip' && <Lightbulb className="w-4 h-4 text-rose-500" />}
                          {section.callout.type === 'remember' && <AlertCircle className="w-4 h-4 text-rose-500" />}
                          {section.callout.type === 'note' && <Info className="w-4 h-4 text-rose-500" />}
                        </div>
                        <div>
                          <span className="font-serif italic font-medium uppercase tracking-wider text-[11px] block mb-0.5">
                            {section.callout.type === 'tip' ? 'Friendly Pro Tip ✿' : section.callout.type === 'remember' ? 'Remember ✦' : 'Handbook Note'}
                          </span>
                          <span className="leading-relaxed">{section.callout.text}</span>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Bottom Pagination Controls */}
              <div className="mt-12 pt-6 border-t border-[#F0EAE1] flex items-center justify-between gap-4">
                {prevLesson ? (
                  <button
                    onClick={() => handleLessonChange(prevLesson.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 hover:border-rose-300 hover:bg-rose-50/40 text-stone-700 text-xs font-sans transition-all group"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                    <div className="text-left">
                      <span className="text-[10px] text-stone-400 block font-mono">Previous</span>
                      <span className="font-medium">{prevLesson.title}</span>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextLesson ? (
                  <button
                    onClick={() => handleLessonChange(nextLesson.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-sans transition-all group shadow-2xs"
                  >
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 block font-mono">Next Lesson</span>
                      <span className="font-medium">{nextLesson.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate('projects')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-900 text-xs font-sans transition-all font-medium"
                  >
                    <span>Try a practice project! ✿</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </article>
          ) : null}
        </main>
      </div>
    </div>
  );
};
