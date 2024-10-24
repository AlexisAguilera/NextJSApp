/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'img.clerk.com',
                port: '',
            }, {
                protocol:'https',
                hostname: 'sgxwycmyisvmlurpiukh.supabase.co',
                port: '',
            }
        ]
    }
};

export default nextConfig;
