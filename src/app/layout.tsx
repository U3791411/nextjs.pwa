import '../../styles/globals.scss';
import type { Metadata } from 'next';
import Navigation from './components/navigation';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Nextjs.PWA',
  description: 'Software Developer & Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
