import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        blush: '#FDF3EA',
        brick: '#9C4136',
        indigo: '#41479B',
        marigold: '#FFC93C',
        bagh: '#48A57D',
        peri: '#B7C6DE',
        ground: 'var(--ground)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        soft: 'var(--soft)',
        rule: 'var(--rule)',
        'rule-2': 'var(--rule-2)',
        night: 'var(--night)',
        'on-night': '#F7EFE6',
        onmar: '#452711',
      },
      fontFamily: {
        curry: ['Best Curry', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'Segoe UI', 'system-ui', 'sans-serif'],
        yatra: ['Yatra One', 'serif'],
      },
      boxShadow: {
        sh: 'var(--sh)',
        'sh-lg': 'var(--sh-lg)',
      },
      animation: {
        ticker: 'sl 42s linear infinite',
      },
      keyframes: {
        sl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
