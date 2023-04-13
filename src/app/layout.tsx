import '../styles/globals.css';
import Footer from '../ui/Footer';
import Navbar from '../ui/Navbar';

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black text-white">
        <Navbar />
        <div className="main-container ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
