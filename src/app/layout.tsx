import { LayoutType } from '@/types/global.types';
import '../styles/globals.css';

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
