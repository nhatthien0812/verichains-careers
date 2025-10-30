import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                vc: {
                    primary: "var(--vc-primary)",
                    bg: "var(--vc-bg)",
                    muted: "var(--vc-muted)",
                    accent: "var(--vc-accent)",
                },
                "light-blue": "hsl(var(--light-blue))",
            },
            fontFamily: {
                sans: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config

