import { Text, Flex, Box, chakra } from '@chakra-ui/react';
import { Project } from './Project';

export const Work = () => {
	return (
		<Box mt={['50vw', '20vw']} id="work">
			<Flex flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
				<Text fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }} mb={-50} fontWeight="semibold">
					<chakra.span color="teal.100" fontFamily="heading">
						3.{' '}
					</chakra.span>
					Some Things I've Made
				</Text>
			</Flex>
			<Project
				id={0}
				title="Hypixel Guild Chat Bot"
				description="A simple yet modern Discord bot that allows you to bridge between Hypixel guild chat and Discord chat. Made with Discord.js and Mineflayer."
				imagePath="/projects/hgcb.png"
				tech={['JavaScript', 'Node.js']}
				github="https://github.com/xMdb/hypixel-guild-chat-bot"
				url="https://github.com/xMdb/hypixel-guild-chat-bot#features"
			/>
			<Project
				id={1}
				title="Craft"
				description="A website for a fake programming language that I came up with. It doesn't exist. I designed the UI in in Figma and brought it to the web using TailwindCSS."
				imagePath="/projects/craft.jpg"
				tech={['HTML', 'Tailwind CSS', 'Node.js']}
				github="https://github.com/xMdb/craft"
				url="https://craft-mockup.netlify.app"
				inverse={true}
			/>
			<Project
				id={2}
				title="Struct"
				description="My IaC (Infrasructure as Code) project. This is my Ansible playbook that I use to automatically provision settings and applications on my Raspberry Pi 4 using Ubuntu Server 20.04. This keeps it idempotent and reproducible if anything goes wrong (Murphy's Law)."
				imagePath="/projects/struct.png"
				tech={['Ansible', 'Docker', 'YAML']}
				github="https://github.com/xMdb/struct"
				url="https://github.com/xMdb/struct#features"
			/>
			<Project
				id={3}
				title="Lil Donut"
				description="A digital media assessment focused around huge doughnuts, made using plain HTML/CSS/JS in August 2020."
				imagePath="/projects/lildonut.png"
				tech={['HTML', 'CSS', 'JavaScript']}
				github="https://github.com/xMdb/lildonut"
				url="https://lildonut.netlify.app"
				inverse={true}
			/>
		</Box>
	);
};
