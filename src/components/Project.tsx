import { Text, Flex, Box, TagLeftIcon, Tag, TagLabel, Stack, Icon, Link, Image } from '@chakra-ui/react';
import { FaReact, FaJs, FaCode, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiAnsible, SiTailwindcss, SiNextdotjs, SiChakraui, SiGithub } from 'react-icons/si';
import { RiCss3Fill, RiHtml5Fill, RiExternalLinkLine } from 'react-icons/ri';

export const Project = ({ id, description, title, imagePath, tech, github, url, inverse }: ProjectProps) => {
	// eslint-disable-next-line no-shadow
	const getTag = (tech: string) => {
		const values = [];
		if (tech == 'React') {
			values[0] = 'blue';
			values[1] = FaReact;
		} else if (tech == 'TypeScript') {
			values[0] = 'twitter';
			values[1] = SiTypescript;
		} else if (tech == 'JavaScript') {
			values[0] = 'yellow';
			values[1] = FaJs;
		} else if (tech == 'Node.js') {
			values[0] = 'green';
			values[1] = FaNodeJs;
		} else if (tech == 'Tailwind CSS') {
			values[0] = 'blue';
			values[1] = SiTailwindcss;
		} else if (tech == 'Chakra UI') {
			values[0] = 'cyan';
			values[1] = SiChakraui;
		} else if (tech == 'Next.js') {
			values[0] = 'white';
			values[1] = SiNextdotjs;
		} else if (tech == 'CSS') {
			values[0] = 'pink';
			values[1] = RiCss3Fill;
		} else if (tech == 'HTML') {
			values[0] = 'orange';
			values[1] = RiHtml5Fill;
		} else if (tech == 'YAML') {
			values[0] = 'orange';
			values[1] = FaCode;
		} else if (tech == 'Ansible') {
			values[0] = 'red';
			values[1] = SiAnsible;
		} else if (tech == 'Docker') {
			values[0] = 'blue';
			values[1] = FaDocker;
		} else {
			values[0] = 'gray';
			values[1] = FaCode;
		}
		return values;
	};
	const Tags = tech.map((item) => (
		<Tag
			key={item}
			// @ts-expect-error "colorScheme" works but tsc says otherwise ¯\_(ツ)_/¯
			colorScheme={getTag(item)[0]}
			size="md"
			cursor="default"
			textAlign={['center', inverse ? 'right' : 'left']}>
			{/* @ts-expect-error "as" WAI but tsc disagrees */}
			<TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
			<TagLabel>{item}</TagLabel>
		</Tag>
	));

	return (
		<Box maxHeight="60vh" id={`project-${id}`} my={[125, '10vw']}>
			<Flex
				flexDirection={['column', 'column', 'row']}
				p={30}
				justifyContent="center"
				alignItems="center">
				<Box
					alignItems="left"
					display={['none', 'none', inverse ? 'none' : 'block']}
					maxWidth={['100%', '50vw', '25vw']}
					my={25}>
					<Image
						filter="grayscale(100%)"
						_hover={{
							filter: 'grayscale(0%)',
							transition: 'all 0.2s ease-in-out',
						}}
						_focus={{
							filter: 'grayscale(0%)',
							transition: 'all 0.2s ease-in-out',
						}}
						transition="all 0.2s ease-in-out"
						borderRadius={5}
						src={imagePath}
						maxWidth="100%"
					/>
				</Box>
				<Box textAlign={['center', 'center', inverse ? 'left' : 'right']} ml={1}>
					<Text fontSize={{ base: 'sm', md: 'sm', lg: 'md' }} color="teal.100" fontFamily="heading" mb={1}>
						Featured Project
					</Text>
					<Text fontSize="3xl" fontWeight="semibold" mb={5}>
						{title}
					</Text>
					<Text
						maxWidth="50ch"
						wordBreak="break-word"
						mb={25}
						backgroundColor={'gray.800'}
						p={5}
						mr={[0, inverse ? 10 : 0]}
						ml={[0, inverse ? 0 : 10]}
						borderRadius={5}>
						{description}
					</Text>
					<Stack isInline justifyContent={['center', 'center', inverse ? 'left' : 'right']} mb={25}>
						{Tags}
					</Stack>
					<Stack isInline justifyContent={['center', 'center', inverse ? 'left' : 'right']}>
						<Link
							href={github}
							isExternal
							_hover={{ color: 'teal.100', transition: 'all 0.35s ease-in-out' }}>
							<Icon as={SiGithub} w={20} h={7} />
						</Link>
						<Link href={url} isExternal _hover={{ color: 'teal.100', transition: 'all 0.35s ease-in-out' }}>
							<Icon as={RiExternalLinkLine} w={20} h={7} />
						</Link>
					</Stack>
				</Box>
				<Box
					alignItems="right"
					display={['block', 'block', inverse ? 'block' : 'none']}
					maxWidth={['100%', '50vw', '25vw']}
					my={25}>
					<Image
						filter="grayscale(100%)"
						_hover={{
							filter: 'grayscale(0%)',
							transition: 'all 0.2s ease-in-out',
						}}
						_focus={{
							filter: 'grayscale(0%)',
							transition: 'all 0.2s ease-in-out',
						}}
						transition="all 0.2s ease-in-out"
						position="relative"
						borderRadius={5}
						src={imagePath}
						maxWidth="100%"
					/>
				</Box>
			</Flex>
		</Box>
	);
};

interface ProjectProps {
	id: number;
	title: string;
	description: string;
	imagePath: string;
	imageWidth?: number;
	imageHeight?: number;
	tech: string[];
	github: string;
	url: string;
	inverse?: boolean;
}
