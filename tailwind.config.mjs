/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // わにまるターコイズ（メインカラー）
        primary: {
          DEFAULT: '#34A398',
          50: '#E6F5F3',
          100: '#C0E8E3',
          200: '#9ADBD3',
          300: '#74CEC3',
          400: '#4EC1B3',
          500: '#34A398',
          600: '#2A8279',
          700: '#20635D',
          800: '#164440',
          900: '#0C2523',
        },
        // 川西町の雪と空気感（セカンダリ）
        secondary: {
          DEFAULT: '#F3F5F7',
          light: '#FAFBFC',
          dark: '#E8EBEF',
        },
        // ダリヤピンク（アクセント）
        accent: {
          DEFAULT: '#E85D75',
          light: '#F08FA0',
          dark: '#D63654',
          50: '#FEF0F3',
        },
        // 雪国クールグレー
        gray: {
          50: '#FAFBFC',   // 雪のような白
          100: '#F3F5F7',
          200: '#E8EBEF',
          300: '#D5DAE1',
          400: '#A8B2BD',
          500: '#6E7C8C',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#0F141A',
        },
        // shadcn/ui用カラー
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-cool': 'linear-gradient(180deg, #FFFFFF 0%, #E6F5F3 100%)',
        'gradient-frost': 'linear-gradient(135deg, #FAFBFC 0%, #E8EBEF 100%)',
        'gradient-primary': 'linear-gradient(135deg, #34A398 0%, #258B81 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FAFBFC 0%, #E6F5F3 100%)',
      },
      boxShadow: {
        'soft': '0 0 0 1px rgba(52, 163, 152, 0.05), 0 2px 8px rgba(52, 163, 152, 0.1), 0 4px 16px rgba(52, 163, 152, 0.05)',
        'medium': '0 0 0 1px rgba(52, 163, 152, 0.1), 0 8px 24px rgba(52, 163, 152, 0.15), 0 16px 32px rgba(52, 163, 152, 0.1)',
        'large': '0 0 0 1px rgba(52, 163, 152, 0.15), 0 16px 48px rgba(52, 163, 152, 0.2), 0 32px 64px rgba(52, 163, 152, 0.15)',
        'enhanced': '0 0 0 1px rgba(52, 163, 152, 0.05), 0 2px 8px rgba(52, 163, 152, 0.1), 0 4px 16px rgba(52, 163, 152, 0.05)',
        'enhanced-hover': '0 0 0 1px rgba(52, 163, 152, 0.1), 0 8px 24px rgba(52, 163, 152, 0.15), 0 16px 32px rgba(52, 163, 152, 0.1)',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        heading: ['Kosugi Maru', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}