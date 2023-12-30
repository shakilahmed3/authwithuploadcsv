import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        "lgreen": {
          10: "#DBF2EB",
          20: "#B7E5D8",
          30: "#93D8C4",
          40: "#6FCBB1",
          50: "#43AB8D",
          60: "#34856E",
          70: "#255F4E",
          80: "#16392F",
          90: "#071310",
          100: "#4BBE9D",
        },
        "lyellow": {
          10: "#FFEBCD",
          20: "#FFD69A",
          30: "#FFC268",
          40: "#FFAD35",
          50: "#E58A03",
          60: "#B26B02",
          70: "#804C01",
          80: "#4C2E01",
          90: "#190F00",
          100: "#FF9903",
        },
        "lblack": {
          10: "#E9EAEB",
          20: "#BDC0C3",
          30: "#8F949A",
          40: "#636A73",
          50: "#37404B",
          60: "#1A222C",
          70: "#131921",
          80: "#0D1116",
          90: "#06080B",
          100: "#202A37",
        },
        // 'lprimary': "#4BBE9D",
        // 'lsecondary': "#FF9903",
        // 'lforeground': "#202A37"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: 'nextui',
    addCommonColors: false,
    defaultTheme: 'light',
    defaultExtendTheme: "light",
    themes: {
      light: {
        colors: {
          foreground: "#202A37",
          background: "#DBF2EB",
          primary: "#4BBE9D",
          secondary: '#FF9903',
          logobrand: "#202A37"
        }
      },
      dark: {
        colors: {
          foreground: "#E9EAEB",
          background: "#202A37",
          primary: "#3C987E",
          secondary: '#FF9903',
          logobrand: "#DBF2EB"
        }
      }
    }
  })],
}



// colors: {
//   primary: '#FF4ECD', // Main brand color
//   primaryLight: '#FCE8E1', // Lighter shade of primary
//   primaryDark: '#E43E82', // Darker shade of primary
//   primaryContrast: '#FFFFFF', // Contrast color for primary

//   secondary: '#20293F', // Secondary brand color
//   secondaryLight: '#424D64', // Lighter shade of secondary
//   secondaryDark: '#0C1524', // Darker shade of secondary
//   secondaryContrast: '#FFFFFF', // Contrast color for secondary

//   success: '#5E1DAD', // Success indicator color
//   successLight: '#8739B8', // Lighter shade of success
//   successDark: '#2D0E77', // Darker shade of success
//   successContrast: '#FFFFFF', // Contrast color for success

//   warning: '#FFCC00', // Warning indicator color
//   warningLight: '#FFDD75', // Lighter shade of warning
//   warningDark: '#EC9C21', // Darker shade of warning
//   warningContrast: '#000000', // Contrast color for warning

//   danger: '#EA9090', // Danger indicator color
//   dangerLight: '#F3C3C3', // Lighter shade of danger
//   dangerDark: '#C87C7C', // Darker shade of danger
//   dangerContrast: '#FFFFFF', // Contrast color for danger

//   link: '#5E1DAD', // Link color
//   text: '#212121', // Primary text color
//   background: '#FFFFFF', // Primary background color

//   border: '#D9D9D9', // Default border color
//   borderDark: '#C2C2C2', // Darker border color
//   borderLight: '#EAEAEA', // Lighter border color

//   shadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)', // Default shadow for components
//   shadowHover: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', // Shadow for components on hover
// }
