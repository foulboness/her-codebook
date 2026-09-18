import React, { useState } from 'react';
import { PageId, ProjectIdea } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { projectsData } from '../data/projectsData';
import { CodeBlock } from '../components/CodeBlock';
import { Lightbulb, Clock, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

interface ProjectIdeasViewProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectIdeasView: React.FC<ProjectIdeasViewProps> = ({ onNavigate }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectIdea | null>(null);

  const difficulties = ['All', 'Easy First Step', 'Weekend Fun', 'Portfolio Builder'];

  const filteredProjects = projectsData.filter(proj => {
    if (selectedDifficulty === 'All') return true;
    return proj.difficulty === selectedDifficulty;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'Project Ideas', active: true }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-[#EAE5DE]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono uppercase tracking-wider mb-3">
          <span>✿</span>
          <span>Hands-On Craftsmanship</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-3">
          Beginner-Friendly Practice Projects
        </h1>

        <p className="text-stone-600 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
          The best way to turn knowledge into confidence is by building tangible things. 
          Each project is designed to be aesthetic, delightful to use, and achievable.
        </p>

        {/* Difficulty Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all ${
                selectedDifficulty === diff
                  ? 'bg-stone-900 text-white font-medium shadow-2xs'
                  : 'bg-white hover:bg-rose-50 text-stone-600 border border-[#EAE5DE] hover:border-rose-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white rounded-3xl border border-[#EAE5DE] p-6 sm:p-8 hover:border-rose-200 transition-all shadow-xs"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-4 border-b border-[#F0EAE1]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800">
                    {project.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{project.timeEstimate}</span>
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
                  {project.title}
                </h2>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 self-start">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary & Why Build It */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1">
                  Project Vision
                </h3>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#F0EAE1]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-rose-800 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Why Build This?</span>
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">
                  {project.whyBuildIt}
                </p>
              </div>
            </div>

            {/* Core Features & Implementation Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F0EAE1]">
              {/* Features List */}
              <div>
                <h4 className="font-serif text-base font-normal text-stone-900 mb-2">
                  Suggested Features to Include:
                </h4>
                <ul className="space-y-1.5 text-xs font-sans text-stone-600">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">✿</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Blueprint */}
              <div>
                <h4 className="font-serif text-base font-normal text-stone-900 mb-2">
                  Step-by-Step Execution Plan:
                </h4>
                <ol className="space-y-1.5 text-xs font-sans text-stone-600">
                  {project.starterSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-stone-400 shrink-0 w-4 text-right">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Optional Starter Code Snippet */}
            {project.starterCode && (
              <div className="mt-6 pt-4 border-t border-[#F0EAE1]">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif text-sm font-normal text-stone-800">
                    Starter Code Scaffolding:
                  </h4>
                  <span className="text-[11px] font-mono text-stone-400">
                    {project.starterCode.filename}
                  </span>
                </div>
                <CodeBlock
                  code={project.starterCode.code}
                  language={project.starterCode.language}
                  filename={project.starterCode.filename}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
