import CommonPagesLayout from './layouts/commonPagesLayout';

export const metadata = {
  title: 'HomePage | Babul Akter',
  description:
    'This is the home page of Babul Akter. I am a full stack web developer. I am a passionate developer who loves to code and learn new things.',
  keywords: 'react, nextjs, typescript, tailwindcss, babulakterfsd',
};

export default function Home() {
  return (
    <CommonPagesLayout>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className=" text-3xl text-red-400">This is the home</h1>
      </div>
    </CommonPagesLayout>
  );
}
