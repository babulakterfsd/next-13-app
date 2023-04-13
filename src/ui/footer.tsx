import Link from 'next/link';

const Footer = () => {
  return (
    <div className="py-4 min-w-full bg-slate-500 text-white text-center ">
      <h6>
        Developed with love by{' '}
        <Link
          href="https://babulakter.com"
          className="text-blue-300 hover:text-white"
        >
          Babul Akter
        </Link>{' '}
      </h6>
    </div>
  );
};

export default Footer;
