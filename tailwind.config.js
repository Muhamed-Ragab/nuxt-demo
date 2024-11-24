const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        primary: "var(--Primary)",
        primaryText: "var(--PrimaryText)",
        primaryHover: "var(--PrimaryHover)",
        primaryDisabled: "var(--PrimaryDisabled)",
        disabled: "var(--Disabled)",
        disabledText: "var(--DisabledText)",
        background: "var(--Background)",
        text: "var(--Text)",
        textTwo: "var(--TextTwo)",
        nav: "var(--Nav)",
        section: "var(--Section)",
        frame: "var(--Frame)",
        icon: "var(--Icon)",
        iconBackground: "var(--IconBackground)",
        iconBackgroundHover: "var(--IconBackgroundHover)",
        iconHover: "var(--IconHover)",
        button: "var(--Botton)",
        buttonText: "var(--BottonText)",
        buttonHover: "var(--BottonHover)",
        buttonTextHover: "var(--BottonTextHover)",
        buttonTwo: "var(--BottonTwo)",
        buttonTwoText: "var(--BottonTwoText)",
        buttonTwoHover: "var(--BottonTwoHover)",
        buttonTwoTextHover: "var(--BottonTwoTextHover)",
        notification: "var(--Notefication)",
        footer: "var(--Footer)",
        footerText: "var(--FooterText)",
        error: "var(--Error)",
        success: "var(--Success)",
        alert: "var(--Alert)",
        border: "var(--Border)",
        borderHover: "var(--BorderHover)",
        borderTwo: "var(--BorderTwo)",
        borderTwoHover: "var(--BorderTwoHover)",
        radio: "var(--Radio)",
        radioOn: "var(--RadioOn)",
        radioDisabled: "var(--RadioDisabled)",
        radioBack: "var(--RadioBack)",
        netStatus: "var(--NetStatus)",
        shadeBackground: "var(--Shadebackground)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
