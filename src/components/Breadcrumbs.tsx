import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../types';

interface BreadcrumbsProps {
  items: {
    label: string;
    pageId?: PageId;
    active?: boolean;
  }[];
  onNavigate: (pageId: PageId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-stone-500 font-sans">
        <li>
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-stone-900 transition-colors p-1 -ml-1 rounded hover:bg-stone-200/50"
            title="Go to Home"
          >
            <Home className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-serif italic text-stone-700">Her Codebook</span>
          </button>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-stone-300" />
            {item.active || !item.pageId ? (
              <span className="font-medium text-stone-800 tracking-tight">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => item.pageId && onNavigate(item.pageId)}
                className="hover:text-stone-900 hover:underline underline-offset-2 transition-colors"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
