import { Text, Flex, Box, chakra, UnorderedList, ListItem, Link, Image } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlueListItem = ({ children }: any) => {
	return <ListItem className="bluelist">{children}</ListItem>;
};

export const About = () => {
	const boxRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const box = boxRef.current;
			const image = imageRef.current;

			if (box && image) {
				const boxRect = box.getBoundingClientRect();
				const imageRect = image.getBoundingClientRect();

				const boxX = (boxRect.width / 2 - e.clientX) / 100 + 'px';
				const boxY = (boxRect.height / 2 - e.clientY) / 100 + 'px';

				const imageX = (imageRect.width / 2 - e.clientX) / 50 + 'px';
				const imageY = (imageRect.height / 2 - e.clientY) / 50 + 'px';

				box.style.transform = `translate(${boxX}, ${boxY})`;
				image.style.transform = `translate(${imageX}, ${imageY})`;

				// Add a transition to the box and image
				box.style.transition = 'transform 0.3s ease-out';
				image.style.transition = 'transform 0.3s ease-out';
			}
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
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
						Hey! My name is Matthew and I'm{' '}
						{Math.floor((new Date().getTime() - new Date(2005, 1, 1).getTime()) / 31536000000)}. I enjoy
						working with tech. I started my internet journey back in 2014 by creating{' '}
						<Link href="https://youtube.com/xMdbMatt" color="teal.100" isExternal>
							YouTube videos
						</Link>{' '}
						and playing video games.
						<br />
						<br />
						Fast-forward to today and I am now a system administrator and IT technician, along with some{' '}
						<Link href="#experience" color="teal.100">
							other pretty snazzy skills
						</Link>
						.
						<br />
						<br />
						Here are a few technologies I've been working with recently:
					</Text>
					<Flex fontFamily="heading">
						<UnorderedList mx={[50, 75, 100]}>
							<BlueListItem>JavaScript</BlueListItem>
							<BlueListItem>Ansible</BlueListItem>
							<BlueListItem>Node.js</BlueListItem>
						</UnorderedList>
						<UnorderedList mx={[50, 75, 100]}>
							<BlueListItem>TypeScript</BlueListItem>
							<BlueListItem>Next.js</BlueListItem>
							<BlueListItem>Docker</BlueListItem>
						</UnorderedList>
					</Flex>
				</Flex>
				{/* Flex Item 2: Image */}
				<Flex flexDirection="column" p={30} textAlign="left" justifyContent="center" alignItems="center">
					<Box
						ref={boxRef}
						border={4}
						borderRadius={10}
						borderColor="teal.100"
						borderStyle="solid"
						display={['none', 'none', 'none', 'none', 'block']}
						zIndex={-1}
						ml={50}
						mt={50}
						width={523}
						height={380}
						p={10}
						position="absolute"
						transition="transform 0.1s ease-out"></Box>
					<Image
						ref={imageRef}
						src="/about.png"
						alt="Matthew Griffin"
						width={'100%'}
						transition="transform 0.1s ease-out"
					/>
				</Flex>
			</Flex>
		</Box>
	);
};
