import '@fontsource/space-mono';
import '@fontsource/inter/800.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/400.css';

import '../custom.css';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS={true} theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
