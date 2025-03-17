import { extendTheme } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    colors: {
        primary: {
            50: '#FFECE6',
            100: '#FFCDB3',
            200: '#FFAA80',
            300: '#FF874D',
            400: '#FF641A',
            500: '#FF4500',
            600: '#E63D00',
            700: '#CC3500',
            800: '#B32D00',
            900: '#992500',
        },
    },
    components: {
        Button: {
            variants: {
                'primary': {
                    bg: 'primary.500',
                    color: 'white',
                    _hover: {
                        bg: 'primary.600',
                    },
                },
            },
        },
    },
});

export default theme;
