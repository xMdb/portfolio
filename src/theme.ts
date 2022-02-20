import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const fonts = {
	base: 'Inter',
	heading: 'Space Mono',
};

const styles = {
	global: {
		body: {
			fontFamily: 'base',
			bg: 'gray.900',
			overflowX: 'hidden',
		},
		html: {
			scrollBehavior: 'smooth',
		},
	},
};

const components = {
	Button: {
		variants: {
			outline: () => ({
				fontFamily: 'heading',
				fontWeight: 'regular',
				color: 'teal.100',
				borderColor: 'teal.100',
				borderRadius: '5px',
				_hover: {
					borderColor: 'teal.300',
				},
			}),
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
		300: '#56BBBB',
	},
};

const theme = extendTheme({
	config,
	fonts,
	styles,
	components,
	colors,
});

export default theme;
