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

export const WhatsAppIcon = ({
  className = 'w-4 h-4 fill-current',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export const InstagramIcon = ({
  className = 'w-4 h-4',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const YouTubeBrandIcon = ({
  className = 'w-8 h-6',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 32 23"
    className={className}
    style={style}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M31.34 3.56a4.01 4.01 0 0 0-2.82-2.84C26.03 0 16 0 16 0S5.97 0 3.48.72A4.01 4.01 0 0 0 .66 3.56C0 6.08 0 11.28 0 11.28s0 5.2.66 7.72a4.01 4.01 0 0 0 2.82 2.84C5.97 22.56 16 22.56 16 22.56s10.03 0 12.52-.72a4.01 4.01 0 0 0 2.82-2.84c.66-2.52.66-7.72.66-7.72s0-5.2-.66-7.72z"
      fill="#FF0000"
    />
    <polygon points="12.8,16.08 21.12,11.28 12.8,6.48" fill="#FFFFFF" />
  </svg>
);

export const InstagramBrandIcon = ({
  className = 'w-7 h-7',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 28 28"
    className={className}
    style={style}
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient
        id="ig-brand-grad"
        r="150%"
        cx="30%"
        cy="105%"
      >
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="28" height="28" rx="7" fill="url(#ig-brand-grad)" />
    <rect
      x="5"
      y="5"
      width="18"
      height="18"
      rx="4.5"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      fill="none"
    />
    <circle
      cx="14"
      cy="14"
      r="4.2"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="19.2" cy="8.8" r="1.1" fill="#FFFFFF" />
  </svg>
);

export const LemonLogo = ({
  className = 'lemon-logo',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/img/lemon-logo.png"
    alt="Custo Gusto Lemon Mascot"
    className={`lemon-logo ${className}`.trim()}
    style={style}
    loading="lazy"
    decoding="async"
  />
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
