import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const fonts = {
	heading: 'Space Mono',
	body: 'Inter',
};

const styles = {
	global: {
		body: {
			fontFamily: 'body',
			bg: 'gray.900',
		},
	},
};

const colors = {
	gray: {
		200: '#AFAFAF',
		800: '#353535',
		900: '#252525',
	},
	teal: {
		100: '#64DFDF',
		200: '#80FFDB',
	},
};

const theme = extendTheme({
	config,
	fonts,
	styles,
	colors,
});

export default theme;
