import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'live' | 'blush';
  children: React.ReactNode;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export function Button({
  href,
  variant = 'primary',
  children,
  target,
  rel,
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const variantClass =
    variant === 'primary'
      ? 'btn-p'
      : variant === 'ghost'
      ? 'btn-g'
      : variant === 'live'
      ? 'btn-live'
      : 'btn-blush';

  const combinedClass = `btn ${variantClass} ${className}`.trim();

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
}
