/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "i.annihil.us",
				pathname: "/u/prod/marvel/**",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
  env: {
		apiKeyPublic: "0cd95d1798ab43b28846186ed5f58e07",
		apiKeyPrivate: "61dffe69ef2a60a0d40b1e389f9e52b62642bce9",
	},
}

module.exports = nextConfig
