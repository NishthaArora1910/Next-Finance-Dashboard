import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
{/*  imported the Inter font into layout: /app/layout.tsx
  This is called a root layout . Any UI you add to the root layout will be shared across all pages in your application.  */}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/* By adding Inter to the <body> element, the font will be applied throughout your application. 
        Here, you're also adding the Tailwind antialiased class which smooths out the font. */}
        <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
