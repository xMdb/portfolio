/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async redirects() {
    return [
      {
        source: '/nfc',
        destination: 'https://linktr.ee/xmdbdev',
        permanent: false,
      },
    ]
  },
};
