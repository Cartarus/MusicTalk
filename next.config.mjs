/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'i.scdn.co',
            },
            {
                protocol:'https',
                hostname:'flowbite.com',
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3001/api/:path*' // Cambia el puerto si es necesario
            }
        ];
    }
};



export default nextConfig;
