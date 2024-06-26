const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './app/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999',
          400: '#888',
          500: '#666',
          600: '#444',
          700: '#333',
          800: '#111',
          900: '#000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Open_Sans', 'Poppins', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
    animation: {
      shine: 'shine 2s linear infinite',
      'text-gradient': 'text-gradient 1.5s linear infinite',
    },
    keyframes: {
      shine: {
        from: {
          backgroundPosition: '0 0',
        },
        to: {
          backgroundPosition: '-200% 0',
        },
      },
      'text-gradient': {
        to: {
          backgroundPosition: '200% center',
        },
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
