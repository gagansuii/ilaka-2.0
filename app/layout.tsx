import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Fraunces } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/components/AuthProvider';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'ILAKA | Rediscover your neighbourhood',
  description: 'Cinematic, map-first community discovery for activities, meetups, workshops, and local energy around you.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space.variable} ${fraunces.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
