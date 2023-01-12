const { join } = require('path')
module.exports = {
    content: [
        join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'component/**/*.{js,ts,jsx,tsx}')
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        spacing: {
            px: '1px',
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem'
        },
        fontSize: {
            10: ['10px'],
            12: ['12px'],
            13: ['13px'],
            14: ['14px'],
            16: ['16px'],
            18: ['18px'],
            20: ['20px'],
            22: ['22px'],
            24: ['24px'],
            26: ['26px'],
            28: ['28px'],
            30: ['30px'],
            32: ['32px'],
            34: ['34px'],
            36: ['36px'],
            38: ['38px'],
            40: ['40px']
        },
        maxWidth: {
            "1/5": "20%"
        },
        extend: {
            fontSize: {
                'cb-title': '17px',
                // 'cb-product-card-title': '13px',
                // 'cb-product-card-info': '11px',
                // 'cb-product-card-price': '12px'
            },
            colors: {
                //orange
                'cb-main': '#ee5816',
                'cb-main-light': '#ffe8de',
                'cb-main-body': '#fff9f5',

                //blue
                'cb-secondary': '#102d4e',
                'cb-secondary-dark': '#0d2641',

                //offer chip
                'cb-green': '#42a80e',

                //gray
                'cb-gray': '#B2B2B2',
                'cb-gray-light': '#c7c7c7',
                'cb-gray-list': '#fbfbfb',

                //Toaster messages 
                'cb-info': '#e7eefa',
                'cb-success': '#eaf7ee',
                'cb-warning': '#fef7ea',
                'cb-error': '#fcede9',

                //search
                'cb-search': '#f6f6f6',

                //status chip
                'cb-success-dark': '#3a880d',
                'cb-warning-dark': '#e6b800',
                'cb-error-dark': '#c11b0f',


                rating: '#000000a1',

                //old
                blue: '#102d4e',
                orange: '#ee5816',
                'orange-light': '#fff3eb',
                "market-card-bg": "#f9f9f9",
            },
            borderColor: {
                'border': '#D9D9D9'

            },
            borderRadius: {
                "round": "20"
            },
            borderWidth: {
                1: "1px",
                5: '5px',
                6: '6px',
            }

        }
    },
    plugins: []
}
