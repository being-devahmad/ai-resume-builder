/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // extend: {
        //     rotate: {

        //         '15': '15deg', // Custom rotation of 15 degrees
        //         '20': '20deg', // Custom rotation of 20 degrees
        //         '30': '30deg', // Custom rotation of 30 degrees
        //         '75': '75deg', // Custom rotation of 75 degrees
        //     },
        //     borderRadius: {
        //         lg: 'var(--radius)',
        //         md: 'calc(var(--radius) - 2px)',
        //         sm: 'calc(var(--radius) - 4px)'
        //     },
        //     colors: {
        //         // PrimaryActions
        //         "button-gpt": "#10a37f",
        //         "button-gpt-hover": "#095c46",
        //         /* Backgrounds */
        //         'main-background': '#ffffff',
        //         'bg-card': '#f7f7f8',
        //         "bg-navigation": '#f0f0f0',
        //         // /* UI Elements */
        //         'border-color': '#d9d9e3',
        //         'icon-color': '#8e8ea0',
        //         'active-color': '#10a37f',
        //         // /* Text */
        //         'primary-text': '#000000',
        //         'secondary-text': '#8e8ea0',
        //         'menu-items': '#4b5563',
        //         background: 'hsl(var(--background))',
        //         foreground: 'hsl(var(--foreground))',
        //         card: {
        //             DEFAULT: 'hsl(var(--card))',
        //             foreground: 'hsl(var(--card-foreground))'
        //         },
        //         popover: {
        //             DEFAULT: 'hsl(var(--popover))',
        //             foreground: 'hsl(var(--popover-foreground))'
        //         },
        //         primary: {
        //             DEFAULT: 'hsl(var(--primary))',
        //             foreground: 'hsl(var(--primary-foreground))'
        //         },
        //         secondary: {
        //             DEFAULT: 'hsl(var(--secondary))',
        //             foreground: 'hsl(var(--secondary-foreground))'
        //         },
        //         muted: {
        //             DEFAULT: 'hsl(var(--muted))',
        //             foreground: 'hsl(var(--muted-foreground))'
        //         },
        //         accent: {
        //             DEFAULT: 'hsl(var(--accent))',
        //             foreground: 'hsl(var(--accent-foreground))'
        //         },
        //         destructive: {
        //             DEFAULT: 'hsl(var(--destructive))',
        //             foreground: 'hsl(var(--destructive-foreground))'
        //         },
        //         border: 'hsl(var(--border))',
        //         input: 'hsl(var(--input))',
        //         ring: 'hsl(var(--ring))',
        //         chart: {
        //             '1': 'hsl(var(--chart-1))',
        //             '2': 'hsl(var(--chart-2))',
        //             '3': 'hsl(var(--chart-3))',
        //             '4': 'hsl(var(--chart-4))',
        //             '5': 'hsl(var(--chart-5))'
        //         },
        //         sidebar: {
        //             DEFAULT: 'hsl(var(--sidebar-background))',
        //             foreground: 'hsl(var(--sidebar-foreground))',
        //             primary: 'hsl(var(--sidebar-primary))',
        //             'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        //             accent: 'hsl(var(--sidebar-accent))',
        //             'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        //             border: 'hsl(var(--sidebar-border))',
        //             ring: 'hsl(var(--sidebar-ring))'
        //         }
        //     },
        //     keyframes: {
        //         'accordion-down': {
        //             from: {
        //                 height: '0'
        //             },
        //             to: {
        //                 height: 'var(--radix-accordion-content-height)'
        //             }
        //         },
        //         'accordion-up': {
        //             from: {
        //                 height: 'var(--radix-accordion-content-height)'
        //             },
        //             to: {
        //                 height: '0'
        //             }
        //         }
        //     },
        //     animation: {
        //         'accordion-down': 'accordion-down 0.2s ease-out',
        //         'accordion-up': 'accordion-up 0.2s ease-out'
        //     }
        // },

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
                    DEFAULT: "hsl(var(--primary))",
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
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },

        darkMode: "class",
        plugins: [tailwindcssAnimate, nextui()],
    }
}