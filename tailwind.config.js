/** Design tokens for PingPong City. Build the stylesheet with: npm run build:css */
module.exports = {
  darkMode: "class",
  content: ["./code.html"],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#353534", "surface-bright": "#3a3939", "on-error-container": "#ffdad6", "surface-dim": "#131313",
        "surface-container": "#201f1f", "inverse-on-surface": "#313030", "background": "#131313", "surface-container-high": "#2a2a2a",
        "on-surface": "#e5e2e1", "secondary-fixed-dim": "#dec800", "on-error": "#690005", "inverse-primary": "#c0001a", "surface": "#131313",
        "tertiary": "#87ceff", "on-tertiary-container": "#002d43", "primary": "#ffb3ad", "tertiary-container": "#3499d0",
        "on-secondary-container": "#716500", "on-tertiary-fixed-variant": "#004c6d", "secondary-container": "#fde400",
        "tertiary-fixed-dim": "#87ceff", "on-background": "#e5e2e1", "on-primary-container": "#5c0007", "secondary-fixed": "#fde400",
        "on-surface-variant": "#e9bcb8", "outline": "#af8783", "error": "#ffb4ab", "surface-container-lowest": "#0e0e0e",
        "inverse-surface": "#e5e2e1", "on-primary-fixed": "#410003", "outline-variant": "#5e3f3c", "error-container": "#93000a",
        "on-primary": "#680009", "on-secondary-fixed": "#201c00", "primary-fixed": "#ffdad6", "primary-fixed-dim": "#ffb3ad",
        "surface-tint": "#ffb3ad", "on-tertiary-fixed": "#001e2e", "on-secondary-fixed-variant": "#504700", "surface-variant": "#353534",
        "surface-container-low": "#1c1b1b", "primary-container": "#ff544f", "on-tertiary": "#00344d", "on-primary-fixed-variant": "#930012",
        "tertiary-fixed": "#c8e6ff", "on-secondary": "#373100", "secondary": "#ffffff"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "margin-desktop": "2.5rem", gutter: "1rem", "space-sm": "0.5rem", margin: "1rem", "space-lg": "1.5rem",
        "space-xs": "0.25rem", "space-md": "1rem", "space-xl": "2.5rem", "gutter-desktop": "1.5rem"
      },
      fontFamily: {
        "headline-xl-mobile": ["Big Shoulders Display", "Segoe UI", "Arial", "sans-serif"],
        "headline-lg": ["Big Shoulders Display", "Segoe UI", "Arial", "sans-serif"],
        "headline-md": ["Big Shoulders Display", "Segoe UI", "Arial", "sans-serif"],
        "headline-xl": ["Big Shoulders Display", "Segoe UI", "Arial", "sans-serif"],
        "headline-sm": ["Big Shoulders Display", "Segoe UI", "Arial", "sans-serif"],
        "label-lg": ["Big Shoulders Display", "Segoe UI", "Arial", "sans-serif"],
        "body-md": ["Figtree", "Segoe UI", "Arial", "sans-serif"],
        "body-sm": ["Figtree", "Segoe UI", "Arial", "sans-serif"],
        "body-lg": ["Figtree", "Segoe UI", "Arial", "sans-serif"],
        "label-md": ["Figtree", "Segoe UI", "Arial", "sans-serif"],
        "label-sm": ["Figtree", "Segoe UI", "Arial", "sans-serif"]
      },
      fontSize: {
        "headline-xl-mobile": ["40px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-lg": ["36px", { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["26px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "700" }],
        "body-md": ["15px", { lineHeight: "22px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "700" }],
        "label-md": ["13px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
        "headline-xl": ["56px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-sm": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "label-lg": ["16px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "22px", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-lg": ["17px", { lineHeight: "26px", fontWeight: "400" }]
      }
    }
  }
};
