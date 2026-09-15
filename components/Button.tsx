import React from 'react';
import Link from 'next/link';
import { Play, Mail, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Glyphs';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'live' | 'blush';
  icon?: 'whatsapp' | 'play' | 'mail' | 'arrow' | 'none';
  children?: React.ReactNode;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

export function Button({
  href,
  variant = 'primary',
  icon,
  children,
  target,
  rel,
  type = 'button',
  className = '',
  onClick,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const isWhatsApp = icon === 'whatsapp' || (href && href.includes('wa.me'));
  const isIconOnly = isWhatsApp && (!children || children === 'WhatsApp' || children === 'WhatsApp us');

  const variantClass =
    variant === 'primary'
      ? 'btn-p'
      : variant === 'ghost'
      ? 'btn-g'
      : variant === 'live'
      ? 'btn-live'
      : 'btn-blush';

  const iconOnlyClass = isIconOnly ? 'btn-icon' : '';

  const combinedClass =
    `btn ${variantClass} ${iconOnlyClass} group inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`.trim();

  // Determine icon to render
  let IconComponent: React.ReactNode = null;

  if (isWhatsApp) {
    IconComponent = (
      <WhatsAppIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
    );
  } else if (icon === 'play' || (href && href.includes('youtube.com'))) {
    IconComponent = (
      <Play className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" />
    );
  } else if (icon === 'mail' || (href && href.startsWith('mailto:'))) {
    IconComponent = (
      <Mail className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
    );
  } else if (icon === 'arrow' || (href && !icon)) {
    IconComponent = (
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    );
  }

  const effectiveAriaLabel = ariaLabel || (isIconOnly ? 'WhatsApp' : undefined);

  const content = (
    <>
      {IconComponent}
      {!isIconOnly && children && <span>{children}</span>}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          onClick={onClick}
          aria-label={effectiveAriaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClass}
        onClick={onClick}
        aria-label={effectiveAriaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      aria-label={effectiveAriaLabel}
    >
      {content}
    </button>
  );
}

