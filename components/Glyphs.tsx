import React from 'react';

export const Tilde = () => (
  <span className="g-tilde" aria-hidden="true">
    <svg viewBox="0 0 62 34">
      <path
        d="M4 22C4 10 12 5 19 12s11 14 18 7 11-12 17-6"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </span>
);

export const Slash = () => <span className="g-slash" aria-hidden="true" />;

export const Dot = ({ style }: { style?: React.CSSProperties }) => (
  <span className="g-dot" aria-hidden="true" style={style} />
);

export function bc(s: string): React.ReactNode[] {
  if (!s) return [];
  const parts = s.split(/([~\/●])/g);
  return parts.map((part, i) => {
    if (part === '~') return <Tilde key={i} />;
    if (part === '/') return <Slash key={i} />;
    if (part === '●') return <Dot key={i} />;
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
