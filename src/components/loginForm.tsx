'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Sign in to your account
          </h1>
          <div className="my-6 flex items-center justify-center gap-x-2 lg:gap-x-10">
            <button
              className="bg-indigo-500 text-white p-2 text-center rounded-md flex items-center gap-x-1"
              onClick={() => alert('google')}
            >
              <span>Signin with </span>
              <AiFillGoogleCircle className="text-xl" />
            </button>
            <span>Or</span>
            <button
              className="bg-indigo-500 text-white p-2 text-center rounded-md flex items-center gap-x-1"
              onClick={() => alert('github')}
            >
              <span>Signin with </span>
              <AiFillGithub className="text-xl" />
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
            <div className="px-4 text-gray-500 dark:text-gray-400">Or</div>
            <div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="text-sm"> Back to Home</span>
              </Link>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
