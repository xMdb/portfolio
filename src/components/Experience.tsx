import { Text, Flex, Box, chakra, Container, SimpleGrid, HStack, VStack } from '@chakra-ui/react';
import {
	RiVideoAddLine,
	RiTerminalBoxLine,
	RiAdminLine,
	RiCodeSSlashLine,
	RiCustomerService2Line,
	RiBugLine,
} from 'react-icons/ri';

export const Experience = () => {
	const skills = [
		{
			id: 4,
			icon: <RiAdminLine />,
			title: 'System Administration',
			text: 'As well as running my own Proxmox and Linux homelab at home, I manage computers and servers daily to ensure they are running smoothly.',
		},
		{
			id: 0,
			icon: <RiCustomerService2Line />,
			title: 'Customer Service',
			text: 'I assist customers day-to-day by providing them with exceptional customer service.',
		},
		{
			id: 2,
			icon: <RiBugLine />,
			title: 'Bug Hunting',
			text: 'I regularly find and report bugs, mainly with Discord!',
		},
		{
			id: 1,
			icon: <RiVideoAddLine />,
			title: 'Digital Creator',
			text: 'I create various digital works such as videos, designs, and artwork in Figma, Adobe Illustrator, Adobe Photoshop, and Adobe Premiere Pro.',
		},
		{
			id: 3,
			icon: <RiCodeSSlashLine />,
			title: 'Full-Stack Developer',
			text: 'I  develop open-source projects using technologies such as Node.js, React, and TypeScript.',
		},
		{
			id: 5,
			icon: <RiTerminalBoxLine />,
			title: 'DevOps',
			text: 'I regularly test and deploy my applications and custom services to AWS servers by using tools like GitHub and Docker.',
		},
	];
	return (
		<Box mt={['100vw', '10vw']} id="experience">
			<Flex flexDirection="column" p={30} textAlign="center" justifyContent="center" alignItems="center">
				<Text fontSize={['3xl', '4xl']} fontWeight="semibold" mb={5}>
					<chakra.span color="teal.100" fontFamily="heading">
						2.{' '}
					</chakra.span>
					What I Do
				</Text>
				<Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} fontFamily="heading" color="teal.100" pb={5}>
					My Skills
				</Text>
				<Container maxW={'6xl'} mt={10} textAlign="left">
					<SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
						{skills.map((feature) => (
							<HStack key={feature.id} align={'top'}>
								<Box color={'teal.100'} px={2} mt={1}>
									{feature.icon}
								</Box>
								<VStack align={'start'}>
									<Text fontWeight={600} fontSize="md">
										{feature.title}
									</Text>
									<Text>{feature.text}</Text>
								</VStack>
							</HStack>
						))}
					</SimpleGrid>
				</Container>
			</Flex>
		</Box>
	);
};
