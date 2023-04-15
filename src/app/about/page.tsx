import CommonPagesLayout from '../layouts/commonPagesLayout';

export const metadata = {
  title: 'About | Babul Akter',
  description: 'This is the about page of babul akter',
  keywords: 'react, nextjs, typescript, tailwindcss, babulakterfsd',
};

const About = () => {
  return (
    <CommonPagesLayout>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className=" text-3xl text-red-400">this is the about page.</h1>
      </div>
    </CommonPagesLayout>
  );
};

export default About;
