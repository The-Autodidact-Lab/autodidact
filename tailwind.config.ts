import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        bg: { DEFAULT: '#0D0124' },
        surface: { DEFAULT: '#241247' },
        primary: { DEFAULT: '#6A3AF0' },
        indigo: { DEFAULT: '#574AED' },
        blue: { DEFAULT: '#386CD4' },
        teal: { DEFAULT: '#2FC6C9' },
        text: { DEFAULT: '#F2F1F3', muted: '#C2C1C2' },
        muted: '#7C7191',
      },
      borderRadius: {
        xl: '24px',
        '2xl': '32px',
        pill: '9999px',
      },
      boxShadow: {
        'brand-sm': '0 1px 2px rgba(0,0,0,0.25)',
        'brand-md': '0 6px 24px rgba(0,0,0,0.35)',
        'brand-lg': '0 20px 60px rgba(13,1,36,0.55)',
        glow: '0 0 0 2px rgba(106,58,240,0.3), 0 10px 40px rgba(47,198,201,0.25)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #2FC6C9 0%, #386CD4 35%, #6A3AF0 70%, #574AED 100%)',
        'brand-radial':
          'radial-gradient(60% 60% at 50% 20%, rgba(47,198,201,0.35) 0%, rgba(106,58,240,0.35) 45%, rgba(13,1,36,0) 70%)',
        glass:
          'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
      backdropBlur: {
        glass: '12px',
        frost: '24px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: ['bg-brand-gradient', 'bg-brand-radial', 'shadow-glow'],
};
export default config;
