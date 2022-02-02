import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import config from '../config';

export const Meta = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
				{/* <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${router.basePath}/favicon-32x32.png`}
					key="icon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${router.basePath}/favicon-16x16.png`}
					key="icon16"
				/> */}
				<link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
			</Head>
			<NextSeo
				title={config.defaultTitle}
				description={config.defaultDescription}
				canonical={config.url}
				openGraph={{
					title: config.defaultTitle,
					description: config.defaultDescription,
					url: config.url,
					site_name: config.defaultTitle,
				}}
				twitter={{
					handle: '@xMdbMatt',
					site: '@xMdbMatt',
					cardType: 'summary_large_image',
				}}
			/>
		</>
	);
};
