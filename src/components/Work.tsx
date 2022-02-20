import { Text, Flex, Box, chakra } from '@chakra-ui/react';
import { Project } from './Project';

export const Work = () => {
	return (
		<Box maxHeight="60vh" my="60vh" id="experience">
			<Flex flexDirection="column" p={30} textAlign="center" justifyContent="center" alignItems="center">
				<Text fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }} fontWeight="semibold" mb={5}>
					<chakra.span color="teal.100" fontFamily="heading">
						3.{' '}
					</chakra.span>
					Some Things I've Made
				</Text>
			</Flex>
			<Project
				id={1}
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				imagePath="/about.png"
				imageWidth={400}
				imageHeight={320}
				tech={['TypeScript', 'Next.js', 'Chakra UI']}
				github="https://github.com/xMdb/xMdb"
				url="https://xmdb.dev"
			/>
		</Box>
	);
};
