import { Box, Flex, Text, IconButton, Stack, Collapse, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export const Nav = () => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box>
			<Flex color="white" minH="60px" py={2} px={[10, 130, 196]} align="center">
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant="ghost"
						aria-label="Toggle Navigation"
						mx={-1}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
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
	return (
		<Stack bg="gray.800" p={4} display={{ md: 'none' }}>
			{NavItems.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, href }: NavItem) => {
	return (
		<Stack spacing={4}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
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
		label: 'Features',
		href: '#',
	},
	{
		label: 'About',
		href: '#',
	},
];
