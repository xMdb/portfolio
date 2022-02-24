import { Text, Flex, Box, chakra, Link } from '@chakra-ui/react';

export const Contact = () => {
	return (
		<Box mt={['60vh', '30vh']} id="contact">
			<Flex flexDirection="column" p={30} textAlign="left" justifyContent="center" alignItems="center">
				<Text fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }} fontWeight="semibold" pb={2}>
					<chakra.span color="teal.100" fontFamily="heading">
						4.{' '}
					</chakra.span>
					Get In Touch
				</Text>
				<Text fontSize={{ base: 'sm', md: 'sm', lg: 'md' }} fontFamily="heading" color="teal.100" pb={5}>
					Come say hello!
				</Text>
				<Link
					className="contactLink"
					fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
					fontWeight="bold"
					pb={5}
					_hover={{
						textDecoration: 'none',
					}}
					_focus={{
						textDecoration: 'none',
					}}
					href="mailto:matt@xmdb.dev">
					matt@xmdb.dev
				</Link>
			</Flex>
		</Box>
	);
};
