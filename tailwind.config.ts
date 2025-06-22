
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Clay craft color palette
				terracotta: {
					50: '#fef7f0',
					100: '#fde8d7',
					200: '#fac9a8',
					300: '#f5a474',
					400: '#ee773e',
					500: '#D2691E',
					600: '#b8461a',
					700: '#9a361a',
					800: '#7c2d1c',
					900: '#65281b',
				},
				sage: {
					50: '#f6f8f4',
					100: '#e9f0e4',
					200: '#d4e1ca',
					300: '#b6cca5',
					400: '#9CAF88',
					500: '#7a9768',
					600: '#5e7650',
					700: '#4a5e41',
					800: '#3c4b35',
					900: '#333f2e',
				},
				clay: {
					50: '#f9f5f0',
					100: '#f0e6d8',
					200: '#e0cab0',
					300: '#cca584',
					400: '#ba845b',
					500: '#8B4513',
					600: '#7a3a0f',
					700: '#68300d',
					800: '#56260b',
					900: '#472009',
				},
				dusty: {
					50: '#f0f4f8',
					100: '#dae6f0',
					200: '#b8cde2',
					300: '#8fb0d0',
					400: '#6B8CAE',
					500: '#4a6b8a',
					600: '#3d5670',
					700: '#33465a',
					800: '#2b3a4a',
					900: '#25323e',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'clay-form': {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1.05) rotate(2deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.8'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'clay-form': 'clay-form 4s ease-in-out infinite',
				'fade-up': 'fade-up 0.6s ease-out'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
