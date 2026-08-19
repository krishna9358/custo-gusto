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
