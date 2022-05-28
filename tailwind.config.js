module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {

            // FONT FAMILY
            fontFamily: {
                // google fonts
                lora: "'Lora', serif",
                dm: "'DM Mono', monospace",
                
                // font hosting
                raleway: "Raleway",
                barlow: "'Barlow Condensed', sans-serif",
            },

            // FONT SIZE
            fontSize: {
                "tiny": ".875rem"
            },

            // LIST STYLE TYPE
            listStyleType: {
                square: 'square',
                roman: 'upper-roman',
            },

            // COLORS
            colors: {
                'custom-blue': '#67e8f9',
            },

        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}