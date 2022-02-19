import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';
import { About } from '../components/About';

const Index = () => {
	return (
		<>
			{/* SEO/OG Info */}
			<Meta />

			<Nav />
			<Hero />

			<About />
		</>
	);
};

export default Index;
