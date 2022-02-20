import { Flex, Box, Link } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<Box maxHeight="20ch" mt="30vh" id="footer">
			<Flex flexDirection="column" p={30} textAlign="center" justifyContent="center" alignItems="center">
				<Link
					fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
					fontFamily="heading"
					href="https://github.com/bchiang7/v4"
					isExternal
					color="gray.200"
					_hover={{
						textDecoration: 'none',
						color: 'teal.100',
						transition: 'all 0.3s ease-in-out',
					}}
					_focus={{
						textDecoration: 'none',
						color: 'teal.100',
						transition: 'all 0.3s ease-in-out',
					}}>
					Design inspired by Brittany Chiang
					<br />
					on GitHub
				</Link>
			</Flex>
		</Box>
	);
};
