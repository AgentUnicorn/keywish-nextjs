import type { NextConfig } from "next";
import fs from 'fs'

const version = fs.readFileSync('./VERSION', 'utf-8')
const timestamp = fs.readFileSync('./TIMESTAMP', 'utf-8')

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        domains: ['images.unsplash.com']
    },
    env: {
        NEXT_PUBLIC_VERSION: version,
        NEXT_PUBLIC_TIMESTAMP: timestamp
    }
};

export default nextConfig;
