import React from 'react';

interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  level?: 'h1' | 'h2';
  titleSizeClass?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level = 'h2',
  titleSizeClass,
  titleStyle,
  className = '',
}: SectionHeadingProps) {
  const HeadingTag = level;
  const defaultSizeClass = level === 'h1' ? 'big' : 'big';

  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <HeadingTag
        className={titleSizeClass || defaultSizeClass}
        style={titleStyle}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="sub" style={{ marginTop: '14px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface EditorialSplitProps {
  left: React.ReactNode;
  right: React.ReactNode;
  stickyLeft?: boolean;
  align?: 'start' | 'center';
  className?: string;
}

export function EditorialSplit({
  left,
  right,
  stickyLeft = false,
  align = 'start',
  className = '',
}: EditorialSplitProps) {
  const alignClass = align === 'center' ? 'items-center' : 'items-start';
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 ${alignClass} ${className}`.trim()}
    >
      <div
        className={`lg:col-span-6 ${
          stickyLeft ? 'lg:sticky lg:top-28 lg:self-start' : ''
        }`}
      >
        {left}
      </div>
      <div className="lg:col-span-6">{right}</div>
    </div>
  );
}
