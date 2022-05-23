import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181b23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2",
        },
        black: '#404040',
        white: {
            "900": "#ffffff",
        },
        pink: {
            "900": "#B213e1",
            "300": "#f7e1ff"

        },
        blue: {
            "300": "#9CC2FF"
        },
        linearGradient: {
            "pink": "linear-gradient(269.31deg, #B213E1 0.09%, #EF3B7C 49.04%, #C21DC6 98.88%)",
            "blue": "linear-gradient(269.31deg, #5178E9 0.09%, #0BC5E9 49.04%, #5178E9 98.88%)",
            "background": "linear-gradient(269.31deg, rgba(29, 51, 84, 0.7) 0.09%, rgba(29, 51, 84, 0.5) 49.04%,  rgba(178, 19, 225,0.3) 98.88%)"
        },
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'linearGradient.background',
                color: 'gray.50'
            }
        }
    }
})