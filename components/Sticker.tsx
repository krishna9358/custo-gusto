import React from 'react';

interface StickerProps {
  variant?: 'default' | 'brick' | 'bagh' | 'indigo';
  children: React.ReactNode;
  className?: string;
  isHindi?: boolean;
  style?: React.CSSProperties;
}

export function Sticker({
  variant = 'default',
  children,
  className = '',
  isHindi = false,
  style,
}: StickerProps) {
  const variantClass =
    variant === 'brick'
      ? 'stk-b'
      : variant === 'bagh'
      ? 'stk-g'
      : variant === 'indigo'
      ? 'stk-i'
      : '';

  const hindiClass = isHindi ? 'hi' : '';

  return (
    <span
      className={`stk ${variantClass} ${hindiClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </span>
  );
}
