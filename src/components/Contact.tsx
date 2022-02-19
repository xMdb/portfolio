import { Text, Flex, Box, chakra, Link } from '@chakra-ui/react';

export const Contact = () => {
	return (
		<Box maxHeight="50vh" mt={['60vh', '20vh']} id="contact">
			<Flex flexDirection="column" p={30} textAlign="left" justifyContent="center" alignItems="center">
				<Text fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }} fontWeight="semibold" pb={2}>
					<chakra.span color="teal.100" fontFamily="heading">
						4.{' '}
					</chakra.span>
					Get In Touch
				</Text>
				{/* <Text fontSize={{ base: 'xl', md: '3xl', lg: 'xl' }} fontWeight="light" pb={5}>Come say hello!</Text> */}
				<Link
					fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
					fontWeight="bold"
					pb={5}
					_hover={{
						textDecoration: 'underline',
						textDecorationColor: 'teal.100',
						textUnderlinePosition: 'under',
						textDecorationThickness: '15px',
					}}
					href="mailto:matt@xmdb.dev">
					matt@xmdb.dev
				</Link>
			</Flex>
		</Box>
	);
};
