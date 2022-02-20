import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
	return (
		<>
			{/* SEO/OG Info */}
			<Meta />

			<Nav />
			<Hero />

			<About />

			<Experience />

			<Work />

			<Contact />
			<Footer />
		</>
	);
};

export default Index;
