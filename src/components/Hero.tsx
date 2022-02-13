import { Text, Flex, Heading, Box } from '@chakra-ui/react';

export const Hero = () => {
	return (
		<Box maxHeight="90vh">
			{/* Desktop */}
			<DesktopHero />

			{/* Mobile */}
			<MobileHero />
		</Box>
	);
};

const DesktopHero = () => {
	return (
		<Flex
			display={{ base: 'none', md: 'flex' }}
			alignItems="center"
			flexDirection="column"
			p={30}
			pt={125}
			textAlign="center">
			<Text fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} fontWeight="black">
				Hi, I'm Matt.
			</Text>
			<Heading>this is a heading in space mono</Heading>
		</Flex>
	);
};

const MobileHero = () => {
	return (
		<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
			<Flex alignItems="center" flexDirection="column" p={30} pt={125} textAlign="center">
				<Text fontSize="4xl" fontWeight="black">
					Heya, I'm Matt.
				</Text>
				<Heading>this is a heading in space mono</Heading>
			</Flex>
		</Flex>
	);
};
