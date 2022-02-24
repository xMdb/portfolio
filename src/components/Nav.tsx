import { Box, Flex, Text, IconButton, Stack, Link, useDisclosure, Button, chakra } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Logo } from './Logo';

export const Nav = () => {
	return (
		<Box height="10vh">
			<Box minH="60px" py={30} px={[5, 25, 50]} textAlign="center" display={{ base: 'none', md: 'flex' }}>
				<Logo />
				<Flex display={{ base: 'none', md: 'flex' }} justifyContent="flex-end" flex={1}>
					<DesktopNav />
				</Flex>
			</Box>
			<MobileNav />
		</Box>
	);
};

const DesktopNav = () => {
	return (
		<Box display="inline-flex">
			{NavItems.map(({ label, order, href }) => (
				<Box key={label} mt={3}>
					<Link
						p={2}
						m={5}
						href={href ?? '#'}
						fontSize="sm"
						fontFamily="heading"
						color="white"
						_hover={{
							color: 'teal.100',
						}}
						className={`fade delay${order}`}>
						<chakra.span color="teal.100">{order}. </chakra.span>
						{label}
					</Link>
				</Box>
			))}
			<NextLink href="/resume.pdf" passHref>
				<Button
					mt={1.5}
					ml={5}
					variant="outline"
					_hover={{
						backgroundColor: 'rgba(86, 187, 187, 0.2)',
						textDecoration: 'none',
					}}
					className="fade delay5">
					Resume
				</Button>
			</NextLink>
		</Box>
	);
};
const MobileNav = () => {
	const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
	const [hidden, setHidden] = useState(!isOpen);
	return (
		<>
			<motion.div
				{...getDisclosureProps()}
				hidden={hidden}
				initial={false}
				onAnimationStart={() => setHidden(false)}
				onAnimationComplete={() => setHidden(!isOpen)}
				animate={{ width: isOpen ? 300 : 0 }}
				style={{
					background: '#353535',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					position: 'fixed',
					zIndex: '2',
					right: '0',
					height: '100vh',
					top: '0',
				}}>
				<Stack justify="center" alignItems="center" align="center" my="25vh">
					{NavItems.map((navItem) => (
						<MobileNavItem key={navItem.label} {...navItem} />
					))}
					<Box>
						<NextLink href="/resume.pdf" passHref>
							<Button
								p={5}
								mt={4}
								variant="outline"
								_hover={{
									backgroundColor: 'rgba(86, 187, 187, 0.2)',
									textDecoration: 'none',
								}}>
								Resume
							</Button>
						</NextLink>
					</Box>
				</Stack>
			</motion.div>
			<Box minH="60px" py={30} px={[5, 10, 15]} textAlign="center" display={{ base: 'flex', md: 'none' }}>
				<Logo />
				<Flex display={{ base: 'flex', md: 'none' }} justifyContent="flex-end" flex={1}>
					<IconButton
						{...getButtonProps()}
						display="inline-flex"
						color="teal.100"
						zIndex={3}
						icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={8} h={8} />}
						variant="ghost"
						aria-label="Toggle Navigation"
					/>
				</Flex>
			</Box>
		</>
	);
};

const MobileNavItem = ({ label, order, href }: NavItem) => {
	return (
		<Stack align="center">
			<Flex
				p={2}
				m={0.5}
				as={Link}
				href={href ?? '#'}
				justify="space-between"
				_hover={{
					color: 'teal.100',
					textDecoration: 'none',
				}}>
				<Text fontWeight={100} fontFamily="heading" fontSize="2xl">
					<chakra.span color="teal.100">{order}. </chakra.span>
					{label}
				</Text>
			</Flex>
		</Stack>
	);
};

interface NavItem {
	label: string;
	order: number;
	href?: string;
}

const NavItems: Array<NavItem> = [
	{
		label: 'About',
		order: 1,
		href: '#about',
	},
	{
		label: 'Experience',
		order: 2,
		href: '#experience',
	},
	{
		label: 'Work',
		order: 3,
		href: '#work',
	},
	{
		label: 'Contact',
		order: 4,
		href: '#contact',
	},
];
