import { Box, Flex, Text, IconButton, Stack, Link, useDisclosure, Container } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const Nav = () => {
	return (
		<Box>
			<Flex py={30} px={[5, 10, 15]} display={{ base: 'none', md: 'flex' }}>
				<Flex justify={{ base: 'center', md: 'start' }}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<Logo />
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>
			<MobileNav />
		</Box>
	);
};

const DesktopNav = () => {
	return (
		<Stack direction={'row'} spacing={4}>
			{NavItems.map((navItem) => (
				<Box key={navItem.label}>
					<Link
						p={5}
						href={navItem.href ?? '#'}
						fontSize="sm"
						fontWeight="bold"
						color="white"
						_hover={{
							color: 'green.200',
						}}>
						{navItem.label}
					</Link>
				</Box>
			))}
		</Stack>
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
				animate={{ width: isOpen ? 375 : 0 }}
				style={{
					background: '#353535',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					position: 'absolute',
					right: '0',
					height: '100vh',
					top: '0',
				}}>
				<Stack justify="center" alignItems="center">
					{NavItems.map((navItem) => (
						<MobileNavItem key={navItem.label} {...navItem} />
					))}
				</Stack>
			</motion.div>
			<Container
				minH="60px"
				py={30}
				px={[5, 10, 15]}
				align="center"
				display={{ base: 'inline-block', md: 'none' }}>
				<Flex display={{ base: 'flex', md: 'none' }}>
					<Logo />
					<Flex display="flex" justifyContent="flex-end" flex={1}>
						<IconButton
							{...getButtonProps()}
							display="inline-flex"
							icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
							variant="ghost"
							aria-label="Toggle Navigation"
						/>
					</Flex>
				</Flex>
			</Container>
		</>
	);
};

const MobileNavItem = ({ label, href }: NavItem) => {
	return (
		<Stack spacing={4} align="center">
			<Flex
				p={2}
				my={8}
				as={Link}
				href={href ?? '#'}
				justify="space-between"
				_hover={{
					color: 'teal.200',
					textDecoration: 'none',
				}}>
				<Text fontWeight={600}>{label}</Text>
			</Flex>
		</Stack>
	);
};

interface NavItem {
	label: string;
	href?: string;
}

const NavItems: Array<NavItem> = [
	{
		label: 'About',
		href: '#',
	},
	{
		label: 'Experience',
		href: '#',
	},
	{
		label: 'Work',
		href: '#',
	},
	{
		label: 'Contact',
		href: '#',
	},
];
