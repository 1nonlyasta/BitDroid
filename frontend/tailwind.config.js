/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "surface-bright": "#393939",
          "surface-variant": "#353535",
          "outline": "#8e9192",
          "surface-container-high": "#2a2a2a",
          "secondary-fixed": "#e5e2e1",
          "on-primary-fixed-variant": "#454747",
          "on-tertiary-fixed-variant": "#474746",
          "on-surface": "#e5e2e1",
          "surface-container": "#1f2020",
          "tertiary-fixed-dim": "#c8c6c5",
          "primary-fixed": "#e2e2e2",
          "surface-dim": "#131313",
          "inverse-primary": "#5d5f5f",
          "on-tertiary-container": "#656464",
          "on-surface-variant": "#c4c7c8",
          "on-primary": "#2f3131",
          "tertiary": "#ffffff",
          "on-tertiary": "#313030",
          "on-background": "#e5e2e1",
          "surface-tint": "#c6c6c7",
          "secondary-fixed-dim": "#c9c6c5",
          "on-error": "#690005",
          "tertiary-container": "#e5e2e1",
          "on-tertiary-fixed": "#1c1b1b",
          "on-secondary-container": "#bab8b7",
          "on-secondary": "#313030",
          "primary-fixed-dim": "#c6c6c7",
          "outline-variant": "#444748",
          "on-primary-fixed": "#1a1c1c",
          "secondary-container": "#4a4949",
          "on-secondary-fixed": "#1c1b1b",
          "inverse-on-surface": "#303030",
          "primary": "#ffffff",
          "surface-container-low": "#1b1c1c",
          "surface": "#131313",
          "secondary": "#c9c6c5",
          "on-secondary-fixed-variant": "#474646",
          "surface-container-highest": "#353535",
          "error-container": "#93000a",
          "tertiary-fixed": "#e5e2e1",
          "on-error-container": "#ffdad6",
          "primary-container": "#e2e2e2",
          "background": "#131313",
          "on-primary-container": "#636565",
          "error": "#ffb4ab",
          "surface-container-lowest": "#0e0e0e",
          "inverse-surface": "#e5e2e1"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
      "spacing": {
          "unit": "4px",
          "margin-mobile": "24px",
          "stack-sm": "8px",
          "stack-md": "16px",
          "stack-lg": "32px",
          "margin-desktop": "48px",
          "gutter": "16px"
      },
      "fontFamily": {
          "headline-md": ["Geist", "sans-serif"],
          "body-sm": ["Geist", "sans-serif"],
          "telemetry-data": ["JetBrains Mono", "monospace"],
          "headline-lg": ["Geist", "sans-serif"],
          "headline-lg-mobile": ["Geist", "sans-serif"],
          "body-lg": ["Geist", "sans-serif"],
          "telemetry-label": ["JetBrains Mono", "monospace"]
      },
      "fontSize": {
          "headline-md": ["20px", { "lineHeight": "1.4", "letterSpacing": "-0.02em", "fontWeight": "500" }],
          "body-sm": ["14px", { "lineHeight": "1.5", "letterSpacing": "0em", "fontWeight": "400" }],
          "telemetry-data": ["13px", { "lineHeight": "1.4", "letterSpacing": "0em", "fontWeight": "400" }],
          "headline-lg": ["32px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "600" }],
          "headline-lg-mobile": ["26px", { "lineHeight": "1.2", "letterSpacing": "-0.03em", "fontWeight": "600" }],
          "body-lg": ["16px", { "lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "400" }],
          "telemetry-label": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500" }]
      }
    }
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/container-queries')
  ],
}
