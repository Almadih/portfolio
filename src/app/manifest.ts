import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohamed Almadih Portfolio',
    short_name: 'Almadih',
    description: 'Portfolio of Mohamed Almadih, Full-Stack Software Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbfbfd',
    theme_color: '#fbfbfd',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
