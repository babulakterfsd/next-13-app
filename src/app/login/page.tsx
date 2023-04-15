import LoginForm from '@/components/loginForm';
import Image from 'next/image';
import AuthLayout from '../layouts/authLayout';

export const metadata = {
  title: 'Login | Babul Akter',
  description: 'This is the login page of babul akter',
  keywords: 'react, nextjs, typescript, tailwindcss, babulakterfsd',
};

const Login = () => {
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
              alt="logo"
              height="50"
              width="50"
            />
            App.
          </a>
          <LoginForm />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;
