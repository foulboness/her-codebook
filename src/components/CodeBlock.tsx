import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  filename,
  showLineNumbers = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-5 rounded-xl overflow-hidden border border-[#E8E2D8] bg-[#1E1C1A] text-stone-100 shadow-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#282522] border-b border-[#36322E] text-xs">
        <div className="flex items-center gap-2">
          {/* Subtle colored dots */}
          <div className="flex items-center gap-1.5 opacity-70">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/80 inline-block" />
          </div>
          {filename ? (
            <span className="font-mono text-stone-300 ml-2 tracking-wide">{filename}</span>
          ) : (
            <span className="font-mono uppercase text-stone-400 tracking-wider text-[11px] ml-1">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          id={`copy-btn-${filename || language}-${Math.random().toString(36).substring(2, 6)}`}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-sans text-stone-300 hover:text-stone-100 hover:bg-[#38332F] transition-colors border border-transparent hover:border-stone-700/50"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-rose-300" />
              <span className="text-rose-200 font-medium">Copied! ✿</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 opacity-70" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body with line numbers */}
      <div className="overflow-x-auto p-4 font-mono text-[13.5px] leading-relaxed select-text">
        <pre className="grid grid-cols-1">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row group">
              {showLineNumbers && (
                <span className="table-cell select-none pr-4 text-right text-stone-500 text-[12px] opacity-60 w-8">
                  {idx + 1}
                </span>
              )}
              <span className="table-cell whitespace-pre text-[#F3EFEA] font-normal">
                {line || ' '}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
