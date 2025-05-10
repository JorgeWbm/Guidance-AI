
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        neon: {
          blue: '#4FACFE',
          purple: '#9D50FF',
          pink: '#FF5ACD',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4FACFE, 0 0 20px rgba(79, 172, 254, 0.5)',
        'neon-purple': '0 0 5px #9D50FF, 0 0 20px rgba(157, 80, 255, 0.5)',
        'neon-pink': '0 0 5px #FF5ACD, 0 0 20px rgba(255, 90, 205, 0.5)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(157, 80, 255, 0.5), 0 0 15px rgba(157, 80, 255, 0.3)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(79, 172, 254, 0.8), 0 0 30px rgba(79, 172, 254, 0.6)'
          },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(157, 80, 255, 0.7), 0 0 10px rgba(157, 80, 255, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(157, 80, 255, 0.9), 0 0 20px rgba(79, 172, 254, 0.7)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(90deg, #4FACFE 0%, #9D50FF 50%, #FF5ACD 100%)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
