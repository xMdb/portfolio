import { Text, Flex, Box, TagLeftIcon, Tag, TagLabel, Stack, Icon, Link } from '@chakra-ui/react';
import { FaReact, FaJs, FaCode } from 'react-icons/fa';
import { SiTypescript, SiJinja, SiTailwindcss, SiNextdotjs, SiChakraui, SiGithub } from 'react-icons/si';
import { RiCss3Fill, RiHtml5Fill, RiExternalLinkLine } from 'react-icons/ri';
import Image from 'next/image';

export const Project = ({
	id,
	description,
	imagePath,
	imageWidth,
	imageHeight,
	tech,
	github,
	url,
	inverse,
}: ProjectProps) => {
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
		} else if (tech == 'Jinja') {
			values[0] = 'red';
			values[1] = SiJinja;
		} else {
			values[0] = 'gray';
			values[1] = FaCode;
		}
		return values;
	};
	const Tags = tech.map((item) => (
		<Tag key={item} colorScheme={getTag(item)[0]} size="md" cursor="default" textAlign={inverse ? 'right' : 'left'}>
			<TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
			<TagLabel>{item}</TagLabel>
		</Tag>
	));

	return (
		<Box maxHeight="60vh" id={`project-${id}`}>
			<Flex flexDirection={['column', 'row']} p={30} justifyContent="center" alignItems="center">
				<Box zIndex={1}>
					<Image src={imagePath} width={imageWidth} height={imageHeight} />
				</Box>
				<Box zIndex={2} textAlign={inverse ? 'left' : 'right'}>
					<Text fontSize={{ base: 'md', md: 'md', lg: 'xl' }} color="teal.100" fontFamily="heading" mb={5}>
						Featured Project
					</Text>
					<Text maxWidth="50ch" wordBreak="break-word">
						{description}
					</Text>
					<Stack isInline justifyContent="center">
						{Tags}
					</Stack>
					<Stack isInline justifyContent="center" w={4} h={10}>
						<Link href={github} isExternal>
							<Icon as={SiGithub} w={20} h={10} />
						</Link>
						<Link href={url} isExternal>
							<Icon as={RiExternalLinkLine} w={20} h={10} />
						</Link>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

interface ProjectProps {
	id: number;
	description: string;
	imagePath: string;
	imageWidth: number;
	imageHeight: number;
	tech: string[];
	github: string;
	url: string;
	inverse?: boolean;
}
