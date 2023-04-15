import SignupForm from '@/components/signupForm';
import Image from 'next/image';
import AuthLayout from '../layouts/authLayout';

export const metadata = {
  title: 'Sign Up | Babul Akter',
  description: 'This is the signup page of babul akter',
  keywords: 'react, nextjs, typescript, tailwindcss, babulakterfsd',
};

const SignUp = () => {
  return (
    <AuthLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-8 h-8 mr-2"
              src="/assets/images/fav.png"
              alt="app"
              height="50"
              width="50"
            />
            App.
          </a>
          <SignupForm />
        </div>
      </section>
    </AuthLayout>
  );
};

export default SignUp;
