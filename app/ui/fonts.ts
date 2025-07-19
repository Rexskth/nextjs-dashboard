import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap' // optional but recommended
});

export const lusitana = Lusitana({
  weight: ['400', '700'], // specify all weights you need
  subsets: ['latin'],
  display: 'swap' // optional but recommended
});