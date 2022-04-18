import { Text, Flex, Box, chakra, UnorderedList, ListItem, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

export const About = () => {
	return (
		<Box mt={['100vw', '5vw']} id="about">
			{/* Master Flex */}
			<Flex
				flexDirection={['column', 'column', 'row']}
				p={30}
				textAlign="left"
				justifyContent="center"
				alignItems="center">
				{/* Flex Item 1: About Text */}
				<Flex flexDirection="column" p={30} textAlign="left" justifyContent="center" alignItems="center">
					<Text fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }} fontWeight="semibold" mr={240}>
						<chakra.span color="teal.100" fontFamily="heading">
							1.{' '}
						</chakra.span>
						About Me
					</Text>
					<Text fontSize={{ base: 'smaller', md: 'sm', lg: 'md' }} fontWeight="normal" maxWidth={450} pb={5}>
						<br />
						Hey! My name is Matthew and I'm 17. I enjoy tinkering with technology. I've been an avid
						computer user for quite some time now and I am still learning new things everyday. I started my
						internet journey back in 2014 by creating{' '}
						<Link href="https://youtube.com/xMdbMatt" color="teal.100" isExternal>
							YouTube videos
						</Link>{' '}
						and playing games like Minecraft.
						<br />
						<br />
						Fast-forward to today, and I am now a full-stack developer working on multiple projects, along
						with some{' '}
						<NextLink href="#experience" passHref>
							<Link href="#experience" color="teal.100">
								other pretty snazzy skills
							</Link>
						</NextLink>{' '}
						under my belt.
						<br />
						<br />
						Here are a few technologies I've been working with recently:
					</Text>
					{/* TODO: make square and blue */}
					<Flex fontFamily="heading">
						<UnorderedList mx={[50, 75, 100]}>
							<ListItem>JavaScript</ListItem>
							<ListItem>Ansible</ListItem>
							<ListItem>Node.js</ListItem>
						</UnorderedList>
						<UnorderedList mx={[50, 75, 100]}>
							<ListItem>TypeScript</ListItem>
							<ListItem>Next.js</ListItem>
							<ListItem>Docker</ListItem>
						</UnorderedList>
					</Flex>
				</Flex>
				{/* Flex Item 2: Image */}
				<Flex flexDirection="column" p={30} textAlign="left" justifyContent="center" alignItems="center">
					<Box
						border={4}
						borderRadius={10}
						borderColor="teal.100"
						borderStyle="solid"
						// too hard to make it responsive
						display={['none', 'none', 'none', 'none', 'block']}
						zIndex={-1}
						ml={50}
						mt={50}
						width={523}
						height={380}
						p={10}
						position="absolute"></Box>
					<Image src="/about.png" alt="Matthew Griffin" width={523} height={380} />
				</Flex>
			</Flex>
		</Box>
	);
};
